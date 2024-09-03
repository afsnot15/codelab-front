import { Routes } from "@angular/router";
import { EPageRoutes, EPathRoutes } from "../../shared/enums/routes/page-route.enum";
import { ProdutoConsultaComponent } from "./produto-consulta/produto-consulta.component";
import { pendingChangesGuard } from "../../shared/guards/pending-changes.guard";
import { ProdutoCadastroComponent } from "./produto-cadastro/produto-cadastro.component";

export const produtoRoutes: Routes = [
  {
    path: EPageRoutes.PRODUTO,
    children: [
      {
        path: `${EPathRoutes.CADASTRO}`,
        component: ProdutoCadastroComponent,
        canDeactivate: [pendingChangesGuard]
      },
      {
        path: `${EPathRoutes.CONSULTA}`,
        component: ProdutoConsultaComponent,
      },
      {
        path: 'editar/:id',
        component: ProdutoCadastroComponent,
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
