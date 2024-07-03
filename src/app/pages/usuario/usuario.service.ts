import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../shared/classes/base-resource/base-resource.service';
import { IUsuario } from './usuario.interface';
import { EApiPath } from '../../shared/enums/api/api-info';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService extends BaseResourceService<IUsuario> {

  constructor(protected readonly _injectorUsuario: Injector) {
    super(_injectorUsuario, EApiPath.USUARIO);
  }
}
