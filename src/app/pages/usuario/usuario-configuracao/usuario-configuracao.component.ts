import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddActionComponent } from '../../../shared/components/action-bar/add-action/add-action.component';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { EUsuarioRoutes } from '../../../shared/enums/routes/usuario-route.enum';
import { SaveActionComponent } from '../../../shared/components/action-bar/save-action/save-action.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'cl-usuario-configuracao',
  standalone: true,
  imports: [  PageLayoutComponent,
    MatIcon,
    MatButtonModule,
    BackActionComponent,
    AddActionComponent,
    SaveActionComponent,
    FormsModule,
    MatSlideToggleModule],
  templateUrl: './usuario-configuracao.component.html',
  styleUrl: './usuario-configuracao.component.scss'
})
export class UsuarioConfiguracaoComponent {
  hide = true;
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;
  backRoute = `${EUsuarioRoutes.ROOT}/${EUsuarioRoutes.CONSULTA}`;

  save() {
    console.log('save');
  }
}
