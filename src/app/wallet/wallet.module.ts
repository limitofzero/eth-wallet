import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { CardModule } from "../ui/card/card.module";


@NgModule({
  declarations: [

    WalletComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class WalletModule { }
