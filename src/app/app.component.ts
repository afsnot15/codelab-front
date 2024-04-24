import { Component } from '@angular/core';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'cl-root',
  standalone: true,
  imports: [HomeComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  nome = 'Code Lab';
}
