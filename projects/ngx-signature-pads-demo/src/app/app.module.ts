import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NgxSignaturePadsModule } from 'ngx-signature-pads';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxSignaturePadsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
