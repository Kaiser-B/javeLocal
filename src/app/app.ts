import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent } from './layout/navbar/navbar';
import { HeadComponent } from './layout/head/head';
import { FooterComponent } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,HeadComponent,FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'javeLocal';
}
