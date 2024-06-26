import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IFormField } from '../../interfaces/form-field.interface';
import { BaseResourceService } from '../base-resource/base-resource.service';
import { EUsuarioRoutes } from '../../enums/routes/usuario-route.enum';

@Component({
  template: '',
})
export abstract class BaseCadastroComponent<TData extends { id: number }>
  implements OnInit
{
  private readonly _router!: Router;
  private readonly _route!: ActivatedRoute;

  abstract cadastroFormGroup: FormGroup;
  abstract cadastroFields: IFormField[];

  idEdit!: number;

  constructor(
    private readonly _service: BaseResourceService<TData>,
    protected _injector: Injector,
  ) {
    this._router = this._injector.get(Router);
    this._route = this._injector.get(ActivatedRoute);
  }

  ngOnInit(): void {
    this.handleEdit();
  }

  protected handleEdit(): void {
    const id = this._route.snapshot.params['id'];

    if (!id) {
      return;
    }

    this.idEdit = +id;
    console.log(this.idEdit);

    this._service.findOneById(this.idEdit).then((response) => {
      if (!response) {
        this.navigateToCadastro();
        return;
      }

      this.patchFormForEdit(response);
    });
  }

  private navigateToCadastro(): void {
    this._router.navigate([`../../${EUsuarioRoutes.CADASTRO}`], {
      relativeTo: this._route,
    });
  }

  protected buildEditValues(payload: TData): TData {
    return payload;
  }

  protected patchFormForEdit(payload: TData): void {
    const values = this.buildEditValues(payload);
    this.cadastroFormGroup.patchValue(values);
  }

  get formValues() {
    return this.cadastroFormGroup.getRawValue() as unknown as TData;
  }

  save(addNew = false) {
    this.cadastroFormGroup.markAllAsTouched();

    if (this.cadastroFormGroup.invalid) {
      return;
    }

    this.idEdit ? this.saveEditar(addNew) : this.saveCadastro(addNew);
  }

  protected saveEditar(addNew = false): void {
    this._service.updateById(this.idEdit, this.formValues).then((response) => {
      if (addNew) {
        this.navigateToCadastro();
      } else {
        this.actionsAfterUpdate(response);
      }
    });
  }

  protected actionsAfterUpdate(response: TData): void {
    console.log(response);
  }

  protected saveCadastro(addNew = false): void {
    this._service.create(this.formValues).then(({ id }) => {
      if (addNew) {
        this.cadastroFormGroup.reset();
      } else {
        this._router.navigate([`../editar/${id}`], { relativeTo: this._route });
      }
    });
  }
}
