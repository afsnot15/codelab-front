import { FormControl } from '@angular/forms';

export interface IProduto {
  id: number;
  descricao: string;
  precoCusto: number;
  precoVenda: number;
  codigoBarras?: string[];
  imagem: string;
}

export interface IProdutoForm {
  id: FormControl<number | null>;
  descricao: FormControl<string | null>;
  precoCusto: FormControl<string | null>;
  precoVenda: FormControl<number | null>;
  codigoBarras?: FormControl<string[] | null>;
  imagem: FormControl<string | null>;
  ativo: FormControl<boolean | null>;
}
