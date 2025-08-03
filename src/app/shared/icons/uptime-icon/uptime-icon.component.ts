import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-uptime-icon',
  imports: [],
  templateUrl: './uptime-icon.component.html',
  styleUrl: './uptime-icon.component.css',
})
export class UptimeIconComponent {
  @Input() width: number = 24;
  @Input() height: number = 24;
  @Input() stroke: string = '#C084FC';
}
