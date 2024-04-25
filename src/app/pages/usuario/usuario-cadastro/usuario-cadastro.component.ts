import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { SaveAddActionComponent } from '../../../shared/components/action-bar/save-add-action/save-add-action.component';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { AddActionComponent } from '../../../shared/components/action-bar/add-action/add-action.component';
import { SaveActionComponent } from '../../../shared/components/action-bar/save-action/save-action.component';

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
    SaveActionComponent
  ],
  templateUrl: './usuario-cadastro.component.html',
  styleUrl: './usuario-cadastro.component.scss',
})
export class UsuarioCadastroComponent {}
