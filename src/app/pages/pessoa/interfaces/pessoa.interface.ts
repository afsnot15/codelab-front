import { FormControl } from '@angular/forms';

export interface IPessoa {
  id: number;
  nome: string;
  documento: string;
  cep: string;
  telefone: string;
  imagem: string;
  ativo: boolean;
}

export interface IPessoaForm {
  id: FormControl<string | null>;
  nome: FormControl<string | null>;
  documento: FormControl<string | null>;
  cep: FormControl<string | null>;
  endereco: FormControl<string | null>;
  telefone: FormControl<string | null>;
  ativo: FormControl<boolean | null>;
}
