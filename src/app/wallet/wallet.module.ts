import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { CardModule } from "../ui/card/card.module";
import { CopiedContentModule } from "../ui/copied-content/copied-content.module";
import { TuiButtonModule } from "@taiga-ui/core";


@NgModule({
  declarations: [

    WalletComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    CopiedContentModule,
    TuiButtonModule
  ]
})
export class WalletModule { }
