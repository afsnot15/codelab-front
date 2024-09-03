import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../shared/classes/base-resource/base-resource.service';
import { IProduto } from './produto.interface';
import { EApiPath } from '../../shared/enums/api/api-info';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService extends BaseResourceService<IProduto> {
  constructor(protected readonly _injectorUsuario: Injector) {
    super(_injectorUsuario, EApiPath.PRODUTO);
  }
}
