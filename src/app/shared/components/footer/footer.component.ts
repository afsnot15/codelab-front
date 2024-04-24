import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'cl-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  version = '1.0.0';
  today = new Date();
  year = this.today.getFullYear();
}
