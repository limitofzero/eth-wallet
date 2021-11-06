import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferMoneyComponent implements OnInit {
  public readonly form: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.form = this.createForm();
  }

  ngOnInit(): void {

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
