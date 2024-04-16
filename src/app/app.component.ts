import { Component } from '@angular/core';
import { LoginModule } from './pages/login/login.module';

@Component({
  selector: 'cl-root',
  standalone: true,
  imports: [LoginModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  nome = 'Code Lab';
}
