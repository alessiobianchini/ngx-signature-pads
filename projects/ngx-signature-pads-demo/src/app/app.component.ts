import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSignaturePadsModule } from 'ngx-signature-pads';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NgxSignaturePadsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  img: any;

  save(e: string) {
    this.img = e;
    console.log(this.img);
  }
}
