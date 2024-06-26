import { Routes } from '@angular/router';
import { UsuarioConsultaComponent } from './usuario-consulta/usuario-consulta.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { EUsuarioRoutes } from '../../shared/enums/routes/usuario-route.enum';
import { UsuarioConfiguracaoComponent } from './usuario-configuracao/usuario-configuracao.component';
import { pendingChangesGuard } from '../../shared/guards/pending-changes.guard';

export const usuarioRoutes: Routes = [
  {
    path: EUsuarioRoutes.ROOT,
    children: [
      {
        path: EUsuarioRoutes.CADASTRO,
        component: UsuarioCadastroComponent,
        canDeactivate: [pendingChangesGuard]
      },
      {
        path: EUsuarioRoutes.CONSULTA,
        component: UsuarioConsultaComponent,
      },
      {
        path: 'editar/:id',
        component: UsuarioCadastroComponent,
        canDeactivate: [pendingChangesGuard]
      },
      {
        path: EUsuarioRoutes.CONFIGURACAO,
        component: UsuarioConfiguracaoComponent,
      },
      {
        path: '',
        redirectTo: EUsuarioRoutes.CONSULTA,
        pathMatch: 'full',
      },
    ],
  },
];
