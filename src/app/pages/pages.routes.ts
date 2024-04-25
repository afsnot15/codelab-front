import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { usuarioRoutes } from './usuario/usuario.routes';

export const pagesRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },


  ...usuarioRoutes,
];
