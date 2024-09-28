import { Routes } from "@angular/router";
import { EPageRoutes, EPathRoutes } from "../../shared/enums/routes/page-route.enum";
import { pendingChangesGuard } from "../../shared/guards/pending-changes.guard";
import { PessoaCadastroComponent } from "./pessoa-cadastro/pessoa-cadastro.component";
import { ProdutoConsultaComponent } from "../produto/produto-consulta/produto-consulta.component";
import { PessoaConsultaComponent } from "./pessoa-consulta/pessoa-consulta.component";

export const pessoaRoutes: Routes = [
  {
    path: EPageRoutes.PESSOA,
    children: [
      {
        path: `${EPathRoutes.CADASTRO}`,
        component: PessoaCadastroComponent,
        canDeactivate: [pendingChangesGuard]
      },
      {
        path: `${EPathRoutes.CONSULTA}`,
        component: PessoaConsultaComponent,
      },
      {
        path: 'editar/:id',
        component: PessoaCadastroComponent,
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
