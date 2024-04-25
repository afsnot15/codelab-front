import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { AddActionComponent } from '../../../shared/components/action-bar/add-action/add-action.component';

@Component({
  selector: 'cl-usuario-consulta',
  standalone: true,
  imports: [PageLayoutComponent, MatIcon, MatButtonModule, BackActionComponent, AddActionComponent],
  templateUrl: './usuario-consulta.component.html',
  styleUrl: './usuario-consulta.component.scss'
})
export class UsuarioConsultaComponent {

}
