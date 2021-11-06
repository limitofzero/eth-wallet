import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferMoneyComponent } from './transfer-money.component';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    TransferMoneyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TransferMoneyComponent,
      }
    ])
  ]
})
export class TransferMoneyModule { }
