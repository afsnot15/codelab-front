import { Component, Inject, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar'

@Component({
  selector: 'cl-snackbar',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {
  public message: string;

  constructor(@Inject(MAT_SNACK_BAR_DATA) message: any) {
    this.message = message.message;
  }

  buttonText = "Close"
  snackBarRef = inject(MatSnackBarRef);

}
