import { Component, Injector } from '@angular/core';
import { BaseCadastroComponent } from '../../../shared/classes/base-cadastro/base-cadastro.component';
import { ProdutoService } from '../produto.service';
import { IProduto, IProdutoForm } from '../produto.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFormField } from '../../../shared/interfaces/form-field.interface';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { EPageRoutes, EPathRoutes } from '../../../shared/enums/routes/page-route.enum';
import { SaveActionComponent } from '../../../shared/components/action-bar/save-action/save-action.component';
import { SaveAddActionComponent } from '../../../shared/components/action-bar/save-add-action/save-add-action.component';
import { FormFieldsListComponent } from '../../../shared/components/form-fields-list/form-fields-list.component';
import { EFieldType } from '../../../shared/enums/field-type.enum';
import { intMask, monetaryMask } from '../../../shared/masks/masks';

@Component({
  selector: 'cl-produto-cadastro',
  standalone: true,
  imports: [PageLayoutComponent, BackActionComponent, SaveActionComponent, SaveAddActionComponent, FormFieldsListComponent],
  templateUrl: './produto-cadastro.component.html',
  styleUrl: './produto-cadastro.component.scss',
})
export class ProdutoCadastroComponent extends BaseCadastroComponent<IProduto> {
  constructor(
    private readonly _produtoService: ProdutoService,
    protected override readonly _injector: Injector,
  ) {
    super(_produtoService, _injector);
  }

  navigateToBack() {
    return `${EPageRoutes.PRODUTO}/${EPathRoutes.CONSULTA}`;
  }

  cadastroFormGroup = new FormGroup<IProdutoForm>({
    id: new FormControl({ value: null, disabled: true }),
    descricao: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    precoCusto: new FormControl(null, [Validators.required]),
    precoVenda: new FormControl(null, [Validators.required]),
    codigoBarras: new FormControl(null, [Validators.required]),
    imagem: new FormControl(null),
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
        label: 'Descrição',
        formControlName: 'descricao',
        placeholder: 'Ex.: borracha sem marca',
      },
      {
        type: EFieldType.Number,
        class: 'grid-2',
        label: 'Preço de custo',
        formControlName: 'precoCusto',
        placeholder: 'Ex.: 1.99',
        mask: monetaryMask,
      },
      {
        type: EFieldType.Number,
        class: 'grid-2',
        label: 'Preço de venda',
        formControlName: 'precoVenda',
        placeholder: 'Ex.: 2.99',
        mask: monetaryMask,
      },
      {
        type: EFieldType.StringArray,
        class: 'grid-2',
        label: 'Código de Barras',
        formControlName: 'codigoBarras',
        placeholder: '789123456789',
        mask: intMask,
      },
    ];
  }
}
