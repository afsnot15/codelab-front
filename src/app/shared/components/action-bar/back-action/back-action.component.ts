import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'cl-back-action',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './back-action.component.html',
  styleUrl: './back-action.component.scss',
})
export class BackActionComponent {
  @Input() backRoute!: string;

  constructor(private readonly _router: Router) {}

  back() {
    this._router.navigateByUrl(this.backRoute);
  }
}
