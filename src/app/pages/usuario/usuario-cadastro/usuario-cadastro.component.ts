import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { AddActionComponent } from '../../../shared/components/action-bar/add-action/add-action.component';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { SaveActionComponent } from '../../../shared/components/action-bar/save-action/save-action.component';
import { SaveAddActionComponent } from '../../../shared/components/action-bar/save-add-action/save-add-action.component';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';
import { EUsuarioRoutes } from '../../../shared/enums/routes/usuario-route.enum';

@Component({
  selector: 'cl-usuario-cadastro',
  standalone: true,
  imports: [
    PageLayoutComponent,
    MatIcon,
    MatButtonModule,
    SaveAddActionComponent,
    BackActionComponent,
    AddActionComponent,
    SaveActionComponent,
  ],
  templateUrl: './usuario-cadastro.component.html',
  styleUrl: './usuario-cadastro.component.scss',
})
export class UsuarioCadastroComponent {
  saveAdd() {
    console.log('saveAdd');
  }

  save() {
    console.log('save');
  }

  navigateToBack() {
    return `${EUsuarioRoutes.ROOT}/${EUsuarioRoutes.CONSULTA}`;
  }

}
