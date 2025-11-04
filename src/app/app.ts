import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent } from './layout/navbar/navbar';
import { HeadComponent } from './layout/head/head';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,HeadComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'javeLocal';
}
