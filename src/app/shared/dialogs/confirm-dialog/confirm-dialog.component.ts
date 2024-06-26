import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

export interface IConfirmDialogData {
  titleText?: string;
  contentText?: string;
  confirmText?: string;
  cancelText?: string;
}

@Component({
  selector: 'cl-confirm-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
})
export class ConfirmDialogComponent {
  titleText = 'Confirmar Ação?';
  contentText = 'Você deseja confirmar essa ação?';
  cancelText = 'Cancelar';
  confirmText = 'Confirmar';

  constructor(@Inject(MAT_DIALOG_DATA) data: IConfirmDialogData) {
    this.titleText = data.titleText ?? this.titleText;
    this.contentText = data.contentText ?? this.contentText;
    this.cancelText = data.cancelText ?? this.cancelText;
    this.confirmText = data.confirmText ?? this.confirmText;
  }
}
