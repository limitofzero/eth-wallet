import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferMoneyComponent } from './transfer-money.component';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { TuiInputModule, TuiInputNumberModule } from "@taiga-ui/kit";
import { TuiButtonModule } from "@taiga-ui/core";
import { SignTxModule } from "./sign-tx/sign-tx.module";
import { EthPipeModule } from "../../ui/eth-pipe/eth-pipe.module";



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
    ]),
    TuiInputModule,
    TuiInputNumberModule,
    TuiButtonModule,
    SignTxModule,
    EthPipeModule
  ]
})
export class TransferMoneyModule { }
