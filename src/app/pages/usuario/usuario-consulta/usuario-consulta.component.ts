import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { AddActionComponent } from '../../../shared/components/action-bar/add-action/add-action.component';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';
import { EHomeRoutes } from '../../../shared/enums/routes/home-route.enum';

@Component({
  selector: 'cl-usuario-consulta',
  standalone: true,
  imports: [
    PageLayoutComponent,
    MatIcon,
    MatButtonModule,
    BackActionComponent,
    AddActionComponent,
  ],
  templateUrl: './usuario-consulta.component.html',
  styleUrl: './usuario-consulta.component.scss',
})
export class UsuarioConsultaComponent {
  backRoute = EHomeRoutes.ROOT;

  meuFormulario = new FormGroup({
    id: new FormControl<number | null>(
      { value: null, disabled: false },
      Validators.required,
    ),

    nome: new FormControl<string | null>({ value: null, disabled: false }, [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  ngOnInit() {
    const idControl = this.meuFormulario.controls.id;
    console.log(idControl.valid);
    idControl.setValue(1);
    console.log(idControl.valid);
  }
}
