import { Injectable, Injector } from "@angular/core";
import { IContaReceber } from "./interfaces/conta-receber.interface";
import { BaseResourceService } from "../../../shared/classes/base-resource/base-resource.service";
import { EApiPath } from "../../../shared/enums/api/api-info";

@Injectable({
  providedIn: 'root',
})
export class ContaReceberService extends BaseResourceService<IContaReceber> {
  constructor(protected readonly _injectorUsuario: Injector) {
    super(_injectorUsuario, EApiPath.CONTA_RECEBER);
  }
}
