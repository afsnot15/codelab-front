import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Icon } from '../../enums/icons/app-icon.enum';
import { HomeRoutes } from '../../enums/routes/home-route.enum';
import { UsuarioRoutes } from '../../enums/routes/usuario-route.enum';

interface IMenuItem {
  label: string;
  icon: string;
  path: string;
}

@Component({
  selector: 'cl-menu',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  constructor(private readonly _router: Router) {}

  menuItems: IMenuItem[] = [
    { label: "Home", icon: Icon.HOME, path: HomeRoutes.ROOT },
    { label: "Usuário", icon: Icon.HOME, path: UsuarioRoutes.ROOT },
  ];

  handleNavigation(path: string) {
    this._router.navigateByUrl(path);
  }
}
