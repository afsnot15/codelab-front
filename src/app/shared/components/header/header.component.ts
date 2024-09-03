import { EHomeRoutes } from './../../enums/routes/home-route.enum';
import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { EUsuarioRoutes } from '../../enums/routes/usuario-route.enum';
import { LoginService } from '../../../pages/login/login.service';

@Component({
  selector: 'cl-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _loginService: LoginService,
  ) {}

  logout(): void {
    this._loginService.logout();
  }

  navigateToUsuarioConfiguracao(): void {
    console.log('navigateToUsuarioConfiguracao');
    this._router.navigate([EUsuarioRoutes.ROOT, EUsuarioRoutes.CONFIGURACAO], {
      relativeTo: this._route,
    });
  }
}
