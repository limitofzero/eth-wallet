import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { POLYMORPHEUS_CONTEXT } from "@tinkoff/ng-polymorpheus";
import { TuiDialogContext } from "@taiga-ui/core";

@Component({
  selector: 'app-sign-tx',
  templateUrl: './sign-tx.component.html',
  styleUrls: ['./sign-tx.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignTxComponent {
  public readonly form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<{ key: string }>) {
    this.form = this.createForm();
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.context.completeWith(this.form.value as { key: string });
  }

  private createForm(): FormGroup {
    return this.fb.group({
      key: ['', Validators.required]
    })
  }
}
