import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { pagesRoutes } from './pages/pages.routes';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: pagesRoutes,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },

  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];
