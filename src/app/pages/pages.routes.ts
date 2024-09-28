import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { usuarioRoutes } from './usuario/usuario.routes';
import { EHomeRoutes } from '../shared/enums/routes/home-route.enum';
import { produtoRoutes } from './produto/produto.routes';
import { pessoaRoutes } from './pessoa/pessoa.routes';
import { contasReceberRoutes as contaReceberRoutes } from './financeiro/conta-receber/conta-receber.routes';

export const pagesRoutes: Routes = [
  {
    path: EHomeRoutes.ROOT,
    component: HomeComponent,
  },

  ...usuarioRoutes,
  ...produtoRoutes,
  ...pessoaRoutes,
  ...contaReceberRoutes,
];
