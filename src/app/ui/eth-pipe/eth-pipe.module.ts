import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EthPipe } from './eth.pipe';



@NgModule({
  declarations: [
    EthPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EthPipe
  ]
})
export class EthPipeModule { }
