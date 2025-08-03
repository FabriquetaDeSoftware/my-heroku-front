import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ports-icon',
  imports: [],
  templateUrl: './ports-icon.component.html',
  styleUrl: './ports-icon.component.css',
})
export class PortsIconComponent {
  @Input() width: number = 24;
  @Input() height: number = 24;
  @Input() stroke: string = '#FFFFFF';
}
