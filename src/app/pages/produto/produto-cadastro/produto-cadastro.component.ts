import { CommonModule } from '@angular/common';
import { Component, Injector } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BaseCadastroComponent } from '../../../shared/classes/base-cadastro/base-cadastro.component';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { SaveActionComponent } from '../../../shared/components/action-bar/save-action/save-action.component';
import { SaveAddActionComponent } from '../../../shared/components/action-bar/save-add-action/save-add-action.component';
import { FormFieldsListComponent } from '../../../shared/components/form-fields-list/form-fields-list.component';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';
import { EFieldType } from '../../../shared/enums/field-type.enum';
import {
  EPageRoutes,
  EPathRoutes,
} from '../../../shared/enums/routes/page-route.enum';
import { IFormField } from '../../../shared/interfaces/form-field.interface';
import { ean13Mask, intMask, monetaryMask } from '../../../shared/masks/masks';
import { IProduto, IProdutoForm } from '../produto.interface';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'cl-produto-cadastro',
  standalone: true,
  imports: [
    PageLayoutComponent,
    BackActionComponent,
    SaveActionComponent,
    SaveAddActionComponent,
    FormFieldsListComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './produto-cadastro.component.html',
  styleUrl: './produto-cadastro.component.scss',
})
export class ProdutoCadastroComponent extends BaseCadastroComponent<IProduto> {
  imageSrc: string | ArrayBuffer | null = '';
  codigoBarras: string = '';
  codigoBarrasList: string[] = [];

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
    descricao: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    precoCusto: new FormControl(null, [Validators.required]),
    precoVenda: new FormControl(null, [Validators.required]),
    codigoBarras: new FormControl(null),
    imagem: new FormControl(null),
    ativo: new FormControl(true),
  });

  addCodigoBarras(): void {
    if (!this.codigoBarras || !this.codigoBarras.trim()) return;

    let codigoBarrasControl = this.cadastroFormGroup.get('codigoBarras');

    if (codigoBarrasControl) {
      const currentValues = codigoBarrasControl.value || [];

      const updatedValues = [...currentValues, this.codigoBarras];

      codigoBarrasControl.setValue(updatedValues);
    }

    this.codigoBarrasList.push(`${this.codigoBarras}`);

    this.patchFormForEdit(this.formValues);
  }

  onImageSelected(event: any): void {
    const element = event.currentTarget as HTMLInputElement;
    let file: File | null = element.files ? element.files[0] : null;
    let base64 = '';

    if (file) {
      this.imageSrc = URL.createObjectURL(file);
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        base64 = reader.result as string;
        const base64Data = base64.split(',')[1];
        console.log(base64Data);
        this.cadastroFormGroup.get('imagem')?.setValue(base64Data);
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage(): void {
    this.imageSrc = null;
    this.cadastroFormGroup.get('imagem')?.setValue(null);
  }

  cadastroFields: IFormField[] = this.getFields();
  codigoBarrasFields: IFormField[] = this.getFieldsCodigoBarras();
  imagemFields: IFormField[] = this.getFieldsImagem();

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
    ];
  }

  private getFieldsImagem(): IFormField[] {
    return [
      {
        type: EFieldType.File,
        class: 'grid-1',
        label: '',
        formControlName: 'imagem',
        placeholder: '',
        mask: intMask,
      },
    ];
  }

  private getFieldsCodigoBarras(): IFormField[] {
    return [
      {
        type: EFieldType.List,
        class: 'grid-10',
        label: '',
        formControlName: 'codigoBarras',
        placeholder: '789123456789',
        mask: ean13Mask,
      },
    ];
  }
}
