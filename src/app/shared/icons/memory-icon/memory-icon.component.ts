import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-memory-icon',
  imports: [],
  templateUrl: './memory-icon.component.html',
  styleUrl: './memory-icon.component.css',
})
export class MemoryIconComponent {
  @Input() width: number = 24;
  @Input() height: number = 24;
  @Input() stroke: string = '#4ADE80';
}
