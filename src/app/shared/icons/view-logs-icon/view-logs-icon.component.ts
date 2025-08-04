import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-logs-icon',
  imports: [],
  templateUrl: './view-logs-icon.component.html',
  styleUrl: './view-logs-icon.component.css',
})
export class ViewLogsIconComponent {
  @Input() width: number = 24;
  @Input() height: number = 24;
  @Input() stroke: string = '#FFFFFF';
}
