import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignTxComponent } from './sign-tx.component';
import { TuiInputModule } from "@taiga-ui/kit";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TuiButtonModule } from "@taiga-ui/core";



@NgModule({
  declarations: [
    SignTxComponent
  ],
  imports: [
    CommonModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiButtonModule,
    FormsModule,
  ],
  exports: [SignTxComponent],
  entryComponents: [SignTxComponent]
})
export class SignTxModule { }
