import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { usuarioRoutes } from './usuario/usuario.routes';
import { EHomeRoutes } from '../shared/enums/routes/home-route.enum';
import { produtoRoutes } from './produto/produto.routes';

export const pagesRoutes: Routes = [
  {
    path: EHomeRoutes.ROOT,
    component: HomeComponent,
  },

  ...usuarioRoutes,
  ...produtoRoutes,
];
