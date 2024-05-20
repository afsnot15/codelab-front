import { EHomeRoutes } from './../../enums/routes/home-route.enum';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { EUsuarioRoutes } from '../../enums/routes/usuario-route.enum';

@Component({
  selector: 'cl-header',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
  ) {}

  logout(): void {
    this._router.navigate([EHomeRoutes.ROOT]);
  }

  navigateToUsuarioConfiguracao(): void {
    console.log('navigateToUsuarioConfiguracao');
    this._router.navigate([EUsuarioRoutes.ROOT, EUsuarioRoutes.CONFIGURACAO], {
      relativeTo: this._route,
    });
  }
}
