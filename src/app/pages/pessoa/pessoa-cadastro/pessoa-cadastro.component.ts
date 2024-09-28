import { Component, Injector } from '@angular/core';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { SaveActionComponent } from '../../../shared/components/action-bar/save-action/save-action.component';
import { SaveAddActionComponent } from '../../../shared/components/action-bar/save-add-action/save-add-action.component';
import { FormFieldsListComponent } from '../../../shared/components/form-fields-list/form-fields-list.component';
import { BaseCadastroComponent } from '../../../shared/classes/base-cadastro/base-cadastro.component';
import { IPessoa, IPessoaForm } from '../interfaces/pessoa.interface';
import { IFormField } from '../../../shared/interfaces/form-field.interface';
import { EPageRoutes, EPathRoutes } from '../../../shared/enums/routes/page-route.enum';
import { PessoaService } from '../pessoa.service';
import { EFieldType } from '../../../shared/enums/field-type.enum';
import { intMask } from '../../../shared/masks/masks';

@Component({
  selector: 'cl-pessoa-cadastro',
  standalone: true,
  imports: [PageLayoutComponent,
    BackActionComponent,
    SaveActionComponent,
    SaveAddActionComponent,
    FormFieldsListComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    FormsModule],
  templateUrl: './pessoa-cadastro.component.html',
  styleUrl: './pessoa-cadastro.component.scss'
})
export class PessoaCadastroComponent extends BaseCadastroComponent<IPessoa> {
  constructor(
    private readonly _pessoaService: PessoaService,
    protected override readonly _injector: Injector,
  ) {
    super(_pessoaService, _injector);
  }


  navigateToBack() {
    return `${EPageRoutes.PESSOA}/${EPathRoutes.CONSULTA}`;
  }

  cadastroFormGroup = new FormGroup<IPessoaForm>({
    id: new FormControl({ value: null, disabled: true }),
    nome: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    documento: new FormControl(null, [Validators.required]),
    cep: new FormControl(null, [Validators.required]),
    endereco: new FormControl(null),
    telefone: new FormControl(null),
    ativo: new FormControl(true),
  });

  cadastroFields: IFormField[] = this.getFields();

  private getFields(): IFormField[] {
    return [
      {
        type: EFieldType.Input,
        class: 'grid-1',
        label: 'Código',
        formControlName: 'id',
        placeholder: '',
        mask: intMask,
      },
      {
        type: EFieldType.Input,
        class: 'grid-3',
        label: 'Nome',
        formControlName: 'nome',
        placeholder: '',
      },
      {
        type: EFieldType.Input,
        class: 'grid-4',
        label: 'Documento',
        formControlName: 'documento',
        placeholder: '',
      },
      {
        type: EFieldType.Input,
        class: 'grid-4',
        label: 'CEP',
        formControlName: 'cep',
        placeholder: '',
      },
      {
        type: EFieldType.Input,
        class: 'grid-4',
        label: 'Endereço',
        formControlName: 'endereco',
        placeholder: '',
      },

      {
        type: EFieldType.Input,
        class: 'grid-4',
        label: 'Telefone',
        formControlName: 'telefone',
        placeholder: '36733789',
      },
    ];
  }
}
