import { Component, Injector } from '@angular/core';
import { BaseConsultaComponent } from '../../../shared/classes/base-consulta/base-consulta.component';
import { IPessoa, IPessoaForm } from '../interfaces/pessoa.interface';
import { EPageRoutes } from '../../../shared/enums/routes/page-route.enum';
import { PessoaService } from '../pessoa.service';
import { EFieldType } from '../../../shared/enums/field-type.enum';
import { intMask } from '../../../shared/masks/masks';
import { IFormField } from '../../../shared/interfaces/form-field.interface';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { SaveActionComponent } from '../../../shared/components/action-bar/save-action/save-action.component';
import { SaveAddActionComponent } from '../../../shared/components/action-bar/save-add-action/save-add-action.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormFieldsListComponent } from '../../../shared/components/form-fields-list/form-fields-list.component';
import { AddActionComponent } from '../../../shared/components/action-bar/add-action/add-action.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BoolToTextPipe } from '../../../shared/pipes/bool-to-text.pipe';
import { FormatIdPipe } from '../../../shared/pipes/format-id.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormatMonetaryPipe } from '../../../shared/pipes/format-monetary.pipe';
import { FormatEan13Pipe } from '../../../shared/pipes/format-ean13.pipe';
import { ProgressLoadingComponent } from '../../../shared/components/progress-loading/progress-loading.component';

const actions = [BackActionComponent, AddActionComponent];
const table = [MatTableModule, MatSortModule, MatPaginatorModule];
const pipes = [BoolToTextPipe, FormatIdPipe, FormatMonetaryPipe, FormatEan13Pipe];

const imports = [
  ...actions,
  ...table,
  ...pipes,
  PageLayoutComponent,
  FormFieldsListComponent,
  ProgressLoadingComponent,
  CommonModule,
  MatIconModule,
];

@Component({
  selector: 'cl-perssoa-consulta',
  standalone: true,
  imports,
  templateUrl: './pessoa-consulta.component.html',
  styleUrl: './pessoa-consulta.component.scss'
})
export class PessoaConsultaComponent extends BaseConsultaComponent<IPessoa> {
  backRoute = EPageRoutes.HOME;

  constructor(
    private _pessoaService: PessoaService,
    private readonly _injectorProduto: Injector,
  ) {
    super(_pessoaService, _injectorProduto);
  }

  displayedColumns: string[] = [
    'id',
    'nome',
    'documento',
    'cep',
    'endereco',
    'telefone',
    'ativo',
    'acoes',
  ];
  fields = [
    'id',
    'nome',
    'documento',
    'cep',
    'endereco',
    'telefone',
    'ativo',
    'acoes',
  ];

  filterFields: IFormField[] = this.getFields();

  filterFormGroup = new FormGroup<IPessoaForm>({
    id: new FormControl(null),
    nome: new FormControl(null),
    documento: new FormControl(null),
    cep: new FormControl(null),
    endereco: new FormControl(null),
    telefone: new FormControl(null),
    ativo: new FormControl(true),
  });

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
    ];
  }
}
