import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { EUsuarioRoutes } from '../../../enums/routes/usuario-route.enum';

@Component({
  selector: 'cl-add-action',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './add-action.component.html',
  styleUrl: './add-action.component.scss',
})
export class AddActionComponent {
  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
  ) {}

  add(): void {
    this._router.navigate(['../cadastro'], { relativeTo: this._route });
  }
}
