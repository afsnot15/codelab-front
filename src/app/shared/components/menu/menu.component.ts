
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { EHomeRoutes } from '../../enums/routes/home-route.enum';
import { EUsuarioRoutes } from '../../enums/routes/usuario-route.enum';
import { EPageRoutes } from '../../enums/routes/page-route.enum';

interface IMenuItem {
  label: string;
  icon: string;
  path: string;
}

@Component({
  selector: 'cl-menu',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  constructor(private readonly _router: Router) {}

  menuItems: IMenuItem[] = [
    { label: 'Home', icon: 'home', path: EHomeRoutes.ROOT },
    { label: 'Usuário', icon: 'person', path: EUsuarioRoutes.ROOT },
    { label: 'Produto', icon: 'shopping_cart', path: EPageRoutes.PRODUTO },
    { label: 'Pessoa', icon: 'person', path: EPageRoutes.PESSOA },
    { label: 'Financeiro', icon: 'payment', path: EPageRoutes.CONTA_RECEBER },
  ];

  handleNavigation(path: string) {
    this._router.navigateByUrl(path);
  }
}
