import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'cl-save-add-action',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './save-add-action.component.html',
  styleUrl: './save-add-action.component.scss'
})
export class SaveAddActionComponent {
  @Output() saveEmitter = new EventEmitter<void>();

  saveAdd(){
    this.saveEmitter.emit();
  }
}
