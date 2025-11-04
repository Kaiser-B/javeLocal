import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-head',
  imports: [],
  templateUrl: './head.html',
  styleUrl: './head.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadComponent { }
