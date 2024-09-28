import { FormControl } from '@angular/forms';

export interface IContaReceber {
  id: number;
  idPessoa: number;
  pessoa: string;
  idUsuarioLancamento: number;
  valorTotal: number;
  dataHora: string;
  pago: boolean;
}

export interface IContaReceberForm {
  id: FormControl<number | null>;
  pessoa: FormControl<IContasReceberPessoa | null>;
  dataHora: FormControl<Date | null>;
  valorTotal: FormControl<number | null>;
  pago: FormControl<boolean | null>;
}

export interface IContaReceberBaixa {
  idContaReceber: number;
  idUsuarioBaixa: number;
  valorPago: number;
  dataHora: Date;
}

export interface IContasReceberPessoa {
  id: number;
  pessoa: string;
}
