import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { CardModule } from "../ui/card/card.module";
import { CopiedContentModule } from "../ui/copied-content/copied-content.module";
import { TuiButtonModule } from "@taiga-ui/core";
import { EthPipeModule } from "../ui/eth-pipe/eth-pipe.module";


@NgModule({
  declarations: [

    WalletComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    CopiedContentModule,
    TuiButtonModule,
    EthPipeModule
  ]
})
export class WalletModule { }
