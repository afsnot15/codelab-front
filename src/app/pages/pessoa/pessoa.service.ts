import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../shared/classes/base-resource/base-resource.service';
import { EApiPath } from '../../shared/enums/api/api-info';
import { IPessoa } from './interfaces/pessoa.interface';

@Injectable({
  providedIn: 'root',
})
export class PessoaService extends BaseResourceService<IPessoa> {
  constructor(protected readonly _injectorUsuario: Injector) {
    super(_injectorUsuario, EApiPath.PESSOA);
  }
}
