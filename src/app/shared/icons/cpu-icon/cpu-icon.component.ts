import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cpu-icon',
  imports: [],
  templateUrl: './cpu-icon.component.html',
  styleUrl: './cpu-icon.component.css',
})
export class CpuIconComponent {
  @Input() width: number = 24;
  @Input() height: number = 24;
  @Input() stroke: string = '#60A5FA';
}
