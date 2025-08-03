import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-disk-icon',
  imports: [],
  templateUrl: './disk-icon.component.html',
  styleUrl: './disk-icon.component.css',
})
export class DiskIconComponent {
  @Input() width: number = 24;
  @Input() height: number = 24;
  @Input() stroke: string = '#FB913C';
}
