import { CommonModule } from '@angular/common';
import { Component, Injector } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BaseConsultaComponent } from '../../../shared/classes/base-consulta/base-consulta.component';
import { AddActionComponent } from '../../../shared/components/action-bar/add-action/add-action.component';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { FormFieldsListComponent } from '../../../shared/components/form-fields-list/form-fields-list.component';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';
import { ProgressLoadingComponent } from '../../../shared/components/progress-loading/progress-loading.component';
import { EFieldType } from '../../../shared/enums/field-type.enum';
import { EPageRoutes } from '../../../shared/enums/routes/page-route.enum';
import { IFormField } from '../../../shared/interfaces/form-field.interface';
import { intMask, monetaryMask } from '../../../shared/masks/masks';
import { BoolToTextPipe } from '../../../shared/pipes/bool-to-text.pipe';
import { FormatIdPipe } from '../../../shared/pipes/format-id.pipe';
import { IProduto, IProdutoForm } from '../produto.interface';
import { ProdutoService } from '../produto.service';
import { FormatMonetaryPipe } from '../../../shared/pipes/format-monetary.pipe';

const actions = [BackActionComponent, AddActionComponent];
const table = [MatTableModule, MatSortModule, MatPaginatorModule];
const pipes = [BoolToTextPipe, FormatIdPipe, FormatMonetaryPipe];

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
  selector: 'cl-produto-consulta',
  standalone: true,
  imports,
  templateUrl: './produto-consulta.component.html',
  styleUrl: './produto-consulta.component.scss',
})
export class ProdutoConsultaComponent extends BaseConsultaComponent<IProduto> {
  backRoute = EPageRoutes.HOME;

  constructor(
    private _produtoService: ProdutoService,
    private readonly _injectorProduto: Injector,
  ) {
    super(_produtoService, _injectorProduto);
  }


  displayedColumns: string[] = [
    'id',
    'descricao',
    'precoCusto',
    'precoVenda',
    'codigoBarras',
    'acoes',
  ];
  fields = [
    'id',
    'descricao',
    'precoCusto',
    'precoVenda',
    'codigoBarras',
    'acoes',
  ];

  filterFields: IFormField[] = [
    {
      type: EFieldType.Input,
      class: 'grid-1',
      label: 'Código',
      formControlName: 'id',
      placeholder: 'Ex.: 1',
      mask: intMask,
    },
    {
      type: EFieldType.Input,
      class: 'grid-2',
      label: 'Descrição',
      formControlName: 'descricao',
      placeholder: 'Ex.: borracha sem marca',
    },
    {
      type: EFieldType.Input,
      class: 'grid-2',
      label: 'Preço de custo',
      formControlName: 'precoCusto',
      placeholder: 'Ex.: 1.99',
      mask: monetaryMask,
    },
    {
      type: EFieldType.Input,
      class: 'grid-2',
      label: 'Preço de venda',
      formControlName: 'precoVenda',
      placeholder: 'Ex.: 2.99',
      mask: monetaryMask,
    },
  ];

  filterFormGroup = new FormGroup<IProdutoForm>({
    id: new FormControl(null),
    descricao: new FormControl(null),
    precoCusto: new FormControl(null),
    precoVenda: new FormControl(null),
    codigoBarras: new FormControl(null),
    imagem: new FormControl(null),
    ativo: new FormControl(true),

  });
}
