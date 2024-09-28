import { Routes } from "@angular/router";
import { EPageRoutes, EPathRoutes } from "../../../shared/enums/routes/page-route.enum";
import { pendingChangesGuard } from "../../../shared/guards/pending-changes.guard";
import { ContasReceberCadastroComponent } from "./conta-receber-cadastro/conta-receber-cadastro.component";
import { ContaReceberConsultaComponent } from "./conta-receber-consulta/conta-receber-consulta.component";

export const contasReceberRoutes: Routes = [
  {
    path: EPageRoutes.CONTA_RECEBER,
    children: [
      {
        path: `${EPathRoutes.CADASTRO}`,
        component: ContasReceberCadastroComponent,
        canDeactivate: [pendingChangesGuard]
      },
      {
        path: `${EPathRoutes.CONSULTA}`,
        component: ContaReceberConsultaComponent,
      },
      {
        path: 'editar/:id',
        component: ContasReceberCadastroComponent,
        canDeactivate: [pendingChangesGuard]
      },
      {
        path: '',
        redirectTo: `${EPathRoutes.CONSULTA}`,
        pathMatch: 'full',
      },
    ],
  },
]
