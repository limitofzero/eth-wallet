import { ChangeDetectionStrategy, Component, Inject, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TuiDialogService } from "@taiga-ui/core";
import { PolymorpheusComponent } from "@tinkoff/ng-polymorpheus";
import { SignTxComponent } from "./sign-tx/sign-tx.component";
import { ActivatedRoute } from "@angular/router";
import { WEB3 } from "../../../web3/web3.token";
import Web3 from "web3";
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferMoneyComponent implements OnInit {
  public readonly form: FormGroup;

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
  }

  ngOnInit(): void {
    const from: string = this.route.parent?.parent?.snapshot.params['address'];
    const fromController = this.form.get('from');
    fromController?.setValue(from, { emitEvent: false });
    fromController?.disable();
  }


  public onSubmit(): void {
    if (!this.form.valid) {
      return;
    }

    this.sendTransaction();
  }

  private sendTransaction(): void {
    this.dialog.pipe(
      switchMap(({ key }) => {
        const formData = { ...this.form.getRawValue(), gasPrice: 1, nonce: 1 };
        return this.web3.eth.accounts.signTransaction(formData, key);
      })
    ).subscribe({
      next: (result) => {
        console.log(result)
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  private createForm(): FormGroup {
    return this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      value: ['', Validators.required],
      gas: [''],
    })
  }

}
