import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delete-icon',
  imports: [],
  templateUrl: './delete-icon.component.html',
  styleUrl: './delete-icon.component.css',
})
export class DeleteIconComponent {
  @Input() width: number = 24;
  @Input() height: number = 24;
  @Input() stroke: string = '#FFFFFF';
}
