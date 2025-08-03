import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-icon',
  imports: [],
  templateUrl: './container-icon.component.html',
  styleUrl: './container-icon.component.css',
})
export class ContainerIconComponent {
  @Input() width: number = 24;
  @Input() height: number = 24;
  @Input() stroke: string = '#60A5FA';
}
