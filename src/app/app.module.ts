import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiDialogModule, TuiNotificationsModule, TuiRootModule } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletModule } from "./wallet/wallet.module";
import { WEB3 } from "../web3/web3.token";
import Web3 from "web3";

function web3Factory(): Web3 {
  return new Web3('ws://127.0.0.1:8546');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      TuiRootModule,
      BrowserAnimationsModule,
      TuiDialogModule,
      TuiNotificationsModule,
    WalletModule,
],
  providers: [
    {
      provide: WEB3,
      useFactory: web3Factory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
