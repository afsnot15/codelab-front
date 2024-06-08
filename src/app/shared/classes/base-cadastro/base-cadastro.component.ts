import { Component, Injector, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { getPaginatorIntl } from '../../helpers/paginator-intl.helper';
import { IFormField } from '../../interfaces/form-field.interface';
import { BaseResourceService } from '../base-resource/base-resource.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: '',
})
export abstract class BaseCadastroComponent<TData extends { id: number }> {
  private readonly _router!: Router;
  private readonly _route!: ActivatedRoute;

  abstract cadastroFormGroup: FormGroup;
  abstract cadastroFields: IFormField[];

  get formValues() {
    return this.cadastroFormGroup.getRawValue() as unknown as TData;
  }

  save(addNew = false) {
    this.cadastroFormGroup.markAllAsTouched();

    if (this.cadastroFormGroup.invalid) {
      return;
    }

    this._service.create(this.formValues).then(({ id }) => {
      if (addNew) {
        this.cadastroFormGroup.reset();
      } else {
        this._router.navigate([`../editar/${id}`, { relativeTo: this._route }]);
      }
    });
  }

  constructor(
    private readonly _service: BaseResourceService<TData>,
    protected _injector: Injector,
  ) {
    this._router = this._injector.get(Router);
    this._route = this._injector.get(ActivatedRoute);
  }
}
