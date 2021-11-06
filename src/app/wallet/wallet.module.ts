import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { CardModule } from "../ui/card/card.module";
import { CopiedContentModule } from "../ui/copied-content/copied-content.module";
import { TuiButtonModule } from "@taiga-ui/core";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    WalletComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    CopiedContentModule,
    TuiButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WalletComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./balance/balance.module').then(m => m.BalanceModule),
          },
          {
            path: 'withdraw',
            loadChildren: () => import('./transfer-money/transfer-money.module').then(m => m.TransferMoneyModule),
          }
        ]
      }
    ])
  ]
})
export class WalletModule { }
