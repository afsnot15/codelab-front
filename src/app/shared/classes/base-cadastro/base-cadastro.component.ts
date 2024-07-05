import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IFormField } from '../../interfaces/form-field.interface';
import { BaseResourceService } from '../base-resource/base-resource.service';
import { EUsuarioRoutes } from '../../enums/routes/usuario-route.enum';
import {
  CanDeactivateComponent,
  TCanDeactivate,
} from '../../guards/pending-changes.guard';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';

@Component({
  template: '',
})
export abstract class BaseCadastroComponent<TData extends { id: number }>
  implements OnInit, CanDeactivateComponent
{
  private readonly _router!: Router;
  private readonly _route!: ActivatedRoute;
  private readonly _dialog!: MatDialog;
  private readonly _snackBar!: MatSnackBar

  abstract cadastroFormGroup: FormGroup;
  abstract cadastroFields: IFormField[];

  idEdit!: number;

  constructor(
    private readonly _service: BaseResourceService<TData>,
    protected _injector: Injector,
  ) {
    this._router = this._injector.get(Router);
    this._route = this._injector.get(ActivatedRoute);
    this._dialog = this._injector.get(MatDialog);
    this._snackBar = this._injector.get(MatSnackBar);
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

    this._service.findOneById(this.idEdit).subscribe((response) => {
      if (!response) {
        this.navigateToCadastro();
        return;
      }

      this.patchFormForEdit(response.data);
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
    this._service.updateById(this.idEdit, this.formValues).subscribe(() => {
      if (addNew) {
        this.cadastroFormGroup.markAsUntouched();
        this.navigateToCadastro();
      } else {
        this.actionsAfterUpdate();
      }
      this.openSnackBar();
    });
  }

  protected actionsAfterUpdate(): void {
    this.cadastroFormGroup.markAsUntouched();
  }

  protected saveCadastro(addNew = false): void {
    this._service.create(this.formValues).subscribe((response) => {
      //this.openSnackBar();
      const id = response.data.id;
      if (addNew) {
        this.cadastroFormGroup.reset();
      } else {
        this.cadastroFormGroup.markAsUntouched();
        this._router.navigate([`../editar/${id}`], { relativeTo: this._route });
      }
    });
  }

  canDeactivate(): TCanDeactivate {
    if (!this.cadastroFormGroup.touched) return true;

    const ref = this._dialog.open(ConfirmDialogComponent, {
      disableClose: true,
      data: {
        titleText: 'Ações Pendentes',
        contentText: 'Você deseja confirmar essa ação?',
      },
    });

    return ref.afterClosed() as unknown as Observable<boolean>;
  }

  protected openSnackBar() {
    const horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    const verticalPosition: MatSnackBarVerticalPosition = 'top';

    this._snackBar.openFromComponent(SnackbarComponent, {
      data: { message: "Salvo com sucesso!" },
      duration: 5 * 100,
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
    });
  }
}
