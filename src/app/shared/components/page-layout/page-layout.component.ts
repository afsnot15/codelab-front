import { Component, Input } from '@angular/core';
import { ActionBarComponent } from '../action-bar/action-bar.component';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'cl-page-layout',
  standalone: true,
  imports: [ActionBarComponent, MatIcon, MatButtonModule],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent {
  @Input({required: true}) title!: string;

}
