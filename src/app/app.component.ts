import { Component } from '@angular/core';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'cl-root',
  standalone: true,
  imports: [HomeComponent, LayoutComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  nome = 'Code Lab';
}
