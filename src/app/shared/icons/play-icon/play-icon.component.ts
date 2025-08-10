import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-play-icon',
  imports: [],
  templateUrl: './play-icon.component.html',
  styleUrl: './play-icon.component.css',
})
export class PlayIconComponent {
  @Input() width: number = 24;
  @Input() height: number = 24;
  @Input() stroke: string = '#FFFFFF';
}
