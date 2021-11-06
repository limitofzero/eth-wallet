import { Component, OnInit, ChangeDetectionStrategy, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TuiDialogService } from "@taiga-ui/core";
import { PolymorpheusComponent } from "@tinkoff/ng-polymorpheus";
import { SignTxComponent } from "./sign-tx/sign-tx.component";

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferMoneyComponent implements OnInit {
  public readonly form: FormGroup;

  private readonly dialog = this.dialogService.open<number>(
    new PolymorpheusComponent(SignTxComponent, this.injector),
    {
      dismissible: true,
      label: 'Sign your transaction',
    },
  );

  constructor(
    private readonly fb: FormBuilder,
    private readonly dialogService: TuiDialogService,
    private readonly injector: Injector
  ) {
    this.form = this.createForm();
  }

  ngOnInit(): void {

  }


  public onSubmit(): void {
    if (!this.form.valid) {
      return;
    }

    this.sendTransaction();
  }

  private sendTransaction(): void {
    this.dialog.subscribe({
      next: data => {
        console.log(data);
      },
      complete: () => {
        console.log('completed');
      }
    })
  }

  private createForm(): FormGroup {
    return this.fb.group({
      from: [],
      to: ['', Validators.required],
      value: ['', Validators.required],
      gas: [''],
    })
  }

}
