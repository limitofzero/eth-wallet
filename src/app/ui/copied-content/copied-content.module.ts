import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopiedContentComponent } from './copied-content.component';



@NgModule({
  declarations: [
    CopiedContentComponent
  ],
  exports: [
    CopiedContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CopiedContentModule { }
