import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { EHomeRoutes } from '../shared/enums/routes/home-route.enum';

@Component({
  selector: 'cl-not-found',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  constructor(private readonly _router: Router) {}

  goToHome() {
    this._router.navigateByUrl(EHomeRoutes.ROOT);
  }
}
