import { Component, Injector } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { BaseCadastroComponent } from '../../../shared/classes/base-cadastro/base-cadastro.component';
import { AddActionComponent } from '../../../shared/components/action-bar/add-action/add-action.component';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { SaveActionComponent } from '../../../shared/components/action-bar/save-action/save-action.component';
import { SaveAddActionComponent } from '../../../shared/components/action-bar/save-add-action/save-add-action.component';
import { FormFieldsListComponent } from '../../../shared/components/form-fields-list/form-fields-list.component';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';
import { EFieldType } from '../../../shared/enums/field-type.enum';
import { EUsuarioRoutes } from '../../../shared/enums/routes/usuario-route.enum';
import { IFormField } from '../../../shared/interfaces/form-field.interface';
import { IUsuario } from '../usuario.interface';
import { UsuarioService } from '../usuario.service';

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
    FormFieldsListComponent,
  ],
  templateUrl: './usuario-cadastro.component.html',
  styleUrl: './usuario-cadastro.component.scss',
})
export class UsuarioCadastroComponent extends BaseCadastroComponent<IUsuario> {
  constructor(
    private readonly _usuarioService: UsuarioService,
    protected override readonly _injector: Injector,
  ) {
    super(_usuarioService, _injector);
  }

  cadastroFormGroup = new FormGroup({
    id: new FormControl({ value: null, disabled: true }),
    nome: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    admin: new FormControl(false),
    senha: new FormControl('temporario'),
    ativo: new FormControl(true),
    permissao: new FormControl([]),
  });

  cadastroFields: IFormField[] = this.getFields();

  navigateToBack() {
    return `${EUsuarioRoutes.ROOT}/${EUsuarioRoutes.CONSULTA}`;
  }

  private getFields(): IFormField[] {
    return [
      {
        type: EFieldType.Input,
        class: 'grid-1',
        label: 'Código',
        formControlName: 'id',
        placeholder: '',
      },
      {
        type: EFieldType.Input,
        class: 'grid-2',
        label: 'Nome',
        formControlName: 'nome',
        placeholder: 'Ex.: José',
      },
      {
        type: EFieldType.Input,
        class: 'grid-2',
        label: 'Email',
        formControlName: 'email',
        placeholder: 'Ex.: jose@email.com',
      },
      {
        type: EFieldType.Checkbox,
        class: 'grid-1',
        label: 'Admin',
        formControlName: 'admin',
        placeholder: '',
      },
    ];
  }
}
