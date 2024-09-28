import { Component, Injector } from '@angular/core';
import { BaseConsultaComponent } from '../../../../shared/classes/base-consulta/base-consulta.component';
import { EPageRoutes } from '../../../../shared/enums/routes/page-route.enum';
import { ContaReceberService } from '../conta-receber.service';
import { IContaReceber, IContaReceberForm } from '../interfaces/conta-receber.interface';
import { IFormField } from '../../../../shared/interfaces/form-field.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { EFieldType } from '../../../../shared/enums/field-type.enum';
import { intMask } from '../../../../shared/masks/masks';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AddActionComponent } from '../../../../shared/components/action-bar/add-action/add-action.component';
import { BackActionComponent } from '../../../../shared/components/action-bar/back-action/back-action.component';
import { FormFieldsListComponent } from '../../../../shared/components/form-fields-list/form-fields-list.component';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';
import { ProgressLoadingComponent } from '../../../../shared/components/progress-loading/progress-loading.component';
import { BoolToTextPipe } from '../../../../shared/pipes/bool-to-text.pipe';
import { FormatEan13Pipe } from '../../../../shared/pipes/format-ean13.pipe';
import { FormatIdPipe } from '../../../../shared/pipes/format-id.pipe';
import { FormatMonetaryPipe } from '../../../../shared/pipes/format-monetary.pipe';

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
  selector: 'cl-contas-receber-consulta',
  standalone: true,
  imports,
  templateUrl: './conta-receber-consulta.component.html',
  styleUrl: './conta-receber-consulta.component.scss'
})
export class ContaReceberConsultaComponent extends BaseConsultaComponent<IContaReceber>{

  backRoute = EPageRoutes.HOME;

  constructor(
    private _contaReceberService: ContaReceberService,
    private readonly _injectorProduto: Injector,
  ) {
    super(_contaReceberService, _injectorProduto);
  }

  displayedColumns: string[] = [
    'id',
    'pessoa',
    'valorTotal',
    'dataHora',
    'pago',
    'acoes',
  ];
  fields = [
    'id',
    'pessoa',
    'valorTotal',
    'dataHora',
    'pago',
    'acoes',
  ];

  filterFields: IFormField[] = this.getFields();

  filterFormGroup = new FormGroup<IContaReceberForm>({
    id: new FormControl(null),
    pessoa: new FormControl(null),
    dataHora: new FormControl(null),
    valorTotal: new FormControl(null),
    pago: new FormControl(null),
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
        type: EFieldType.Select,
        class: 'grid-3',
        label: 'Pessoa',
        formControlName: 'pessoa',
        options: [{label: 'Afonso', value: '1'}, {label: 'Felipe', value: '2'}],
        placeholder: '',
      },
      {
        type: EFieldType.Datepicker,
        class: 'grid-2',
        label: 'Lançamento',
        formControlName: 'dataHora',
        placeholder: '',
      },
      {
        type: EFieldType.Datepicker,
        class: 'grid-2',
        label: '',
        formControlName: 'dataHora',
        placeholder: '',
      },
      {
        type: EFieldType.Checkbox,
        class: 'grid-1',
        label: 'Pago',
        formControlName: 'pago',
        placeholder: '',
      },
    ];
  }
}
