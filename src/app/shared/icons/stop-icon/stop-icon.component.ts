import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stop-icon',
  imports: [],
  templateUrl: './stop-icon.component.html',
  styleUrl: './stop-icon.component.css',
})
export class StopIconComponent {
  @Input() width: number = 24;
  @Input() height: number = 24;
  @Input() stroke: string = '#FFFFFF';
}
