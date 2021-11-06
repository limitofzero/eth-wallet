import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceComponent } from './balance.component';
import { TuiAccordionModule } from "@taiga-ui/kit";
import { TuiSvgModule } from "@taiga-ui/core";
import { EthPipeModule } from "../../ui/eth-pipe/eth-pipe.module";
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    BalanceComponent
  ],
  imports: [
    CommonModule,
    TuiAccordionModule,
    TuiSvgModule,
    EthPipeModule,
    RouterModule.forChild([
      {
        path: '',
        component: BalanceComponent,
      }
    ])
  ]
})
export class BalanceModule { }
