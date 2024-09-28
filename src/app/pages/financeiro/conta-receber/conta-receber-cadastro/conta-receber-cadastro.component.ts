import { Component, Injector } from '@angular/core';
import { BaseCadastroComponent } from '../../../../shared/classes/base-cadastro/base-cadastro.component';
import { IContaReceber, IContaReceberForm } from '../interfaces/conta-receber.interface';
import { ContaReceberService } from '../conta-receber.service';
import { EPageRoutes, EPathRoutes } from '../../../../shared/enums/routes/page-route.enum';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { IFormField } from '../../../../shared/interfaces/form-field.interface';
import { EFieldType } from '../../../../shared/enums/field-type.enum';
import { intMask } from '../../../../shared/masks/masks';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BackActionComponent } from '../../../../shared/components/action-bar/back-action/back-action.component';
import { SaveActionComponent } from '../../../../shared/components/action-bar/save-action/save-action.component';
import { SaveAddActionComponent } from '../../../../shared/components/action-bar/save-add-action/save-add-action.component';
import { FormFieldsListComponent } from '../../../../shared/components/form-fields-list/form-fields-list.component';
import { PageLayoutComponent } from '../../../../shared/components/page-layout/page-layout.component';

@Component({
  selector: 'cl-contas-receber-cadastro',
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
  templateUrl: './conta-receber-cadastro.component.html',
  styleUrl: './conta-receber-cadastro.component.scss'
})
export class ContasReceberCadastroComponent extends BaseCadastroComponent<IContaReceber>{

  constructor(
    private readonly _contaReceberService: ContaReceberService,
    protected override readonly _injector: Injector,
  ) {
    super(_contaReceberService, _injector);
  }

  navigateToBack() {
    return `${EPageRoutes.CONTA_RECEBER}/${EPathRoutes.CONSULTA}`;
  }

  cadastroFormGroup = new FormGroup<IContaReceberForm>({
    id: new FormControl({ value: null, disabled: true }),
    pessoa: new FormControl(null, [
      Validators.required,
    ]),
    dataHora: new FormControl({ value: new Date(), disabled: true }, [Validators.required]),
    valorTotal: new FormControl(null, [Validators.required]),
    pago: new FormControl(null),
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
        label: 'Data Lançamento',
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
