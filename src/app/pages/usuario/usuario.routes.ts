import { Routes } from '@angular/router';
import { UsuarioConsultaComponent } from './usuario-consulta/usuario-consulta.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioRoutes } from '../../shared/enums/routes/usuario-route.enum';

export const usuarioRoutes: Routes = [
  {
    path: UsuarioRoutes.ROOT,
    children: [
      {
        path: UsuarioRoutes.CADASTRO,
        component: UsuarioCadastroComponent,
      },
      {
        path: UsuarioRoutes.CONSULTA,
        component: UsuarioConsultaComponent,
      },
      {
        path: '',
        redirectTo: UsuarioRoutes.CONSULTA,
        pathMatch: 'full',
      },
    ],
  },
];
