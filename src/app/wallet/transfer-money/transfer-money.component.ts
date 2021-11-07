import { ChangeDetectionStrategy, Component, Inject, Injector, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { TuiDialogService } from "@taiga-ui/core";
import { PolymorpheusComponent } from "@tinkoff/ng-polymorpheus";
import { SignTxComponent } from "./sign-tx/sign-tx.component";
import { ActivatedRoute } from "@angular/router";
import { WEB3 } from "../../../web3/web3.token";
import Web3 from "web3";
import { catchError, debounceTime, map, shareReplay, startWith, switchMap, withLatestFrom } from "rxjs/operators";
import { from, Observable, of } from "rxjs";
import { TransactionConfig } from "web3-core";
import BigNumber from "bignumber.js";

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferMoneyComponent implements OnInit {
  public readonly form: FormGroup;
  public readonly gas: Observable<string>;
  public readonly total: Observable<string>;
  public balance: Observable<string> | undefined;


  private readonly dialog = this.dialogService.open<{ key: string }>(
    new PolymorpheusComponent(SignTxComponent, this.injector),
    {
      dismissible: true,
      label: 'Sign your transaction',
    },
  );

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogService: TuiDialogService,
    private readonly injector: Injector,
    private readonly route: ActivatedRoute,
    @Inject(WEB3) private readonly web3: Web3,
  ) {
    this.form = this.createForm();
    this.gas = this.calculateGas();
    this.total = this.calculateTotal();
  }

  ngOnInit(): void {
    const address: string = this.route.parent?.parent?.snapshot.params['address'];
    const fromController = this.form.get('from');
    fromController?.setValue(address, { emitEvent: false });
    fromController?.disable();

    this.balance = from(this.web3.eth.getBalance(address));
  }


  public onSubmit(): void {
    if (!this.form.valid) {
      return;
    }

    this.sendTransaction();
  }

  private calculateGas(): Observable<string> {
    const control = this.form.get('value');
    if (!control) {
      throw new Error('Control value is not defined');
    }

    return control.valueChanges.pipe(
      debounceTime(500),
      switchMap(() => {
        if (this.form.valid) {
          return from(this.web3.eth.estimateGas(this.getTxConfigFromForm())).pipe(
            map(v => v.toString()),
            catchError((err: unknown) => {
              console.error(err);
              return of('');
            })
          )
        }

        return of('');
      }),
      startWith(''),
      shareReplay({
        bufferSize: 1,
        refCount: true,
      })
    )
  }

  public calculateTotal(): Observable<string> {
    return this.gas.pipe(
      map(gas => {
        if (gas) {
          const currentValue = this.form.get('value')?.value ?? '0';
          const asWei = this.web3.utils.toWei(currentValue.toString(), 'ether').toString();
          console.log(asWei);
          return new BigNumber(asWei).plus(gas).toString();
        }

        return '';
      }),
      startWith(''),
    );
  }

  private sendTransaction(): void {
    this.dialog.pipe(
      withLatestFrom(this.gas),
      switchMap(([{ key }, gas]) => {
        const formData = { ...this.getTxConfigFromForm(), gas };
        return this.web3.eth.accounts.signTransaction(formData, key);
      }),
      switchMap(tx => this.web3.eth.sendSignedTransaction(tx.rawTransaction as string))
    ).subscribe({
      next: (result) => {
        console.log(result)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  private getTxConfigFromForm(): TransactionConfig {
    const formValue = this.form.getRawValue();
    return {
      from: formValue.from,
      to: formValue.to,
      // todo use string field for value
      value: this.web3.utils.toWei(formValue.value.toString(), 'ether')
    }
  }

  private createForm(): FormGroup {
    return this.fb.group({
      from: ['', Validators.required],
      to: ['', [Validators.required, this.isAddressValidator]],
      value: ['', Validators.required],
    })
  }

  private isAddressValidator = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value && !this.web3.utils.isAddress(value)) {
      return { 'incorrectAddress': true };
    }

    return null;
  }
}
