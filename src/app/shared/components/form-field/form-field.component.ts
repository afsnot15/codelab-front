import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IFormField } from '../../interfaces/form-field.interface';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { controlErrorMessages } from '../../helpers/form-error.helper';
import { ean13Mask } from '../../masks/masks';
import { FormatEan13Pipe } from '../../pipes/format-ean13.pipe';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';

const form = [ReactiveFormsModule, FormsModule];
const components = [
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatSlideToggleModule,
];

const pipes = [FormatEan13Pipe];

@Component({
  selector: 'cl-form-field',
  standalone: true,
  imports: [...form, ...components, ...pipes],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
})
export class FormFieldComponent {
  @Input({ required: true }) field!: IFormField;
  @Input({ required: true }) form!: FormGroup;

  get items(): string[] {
    if (!this.field || !this.form) return [];

    const formControl = this.form.get(this.field.formControlName);
    let list = [];

    if (formControl) {
      list = formControl.value;
    }

    return list;
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  get label(): string {
    const isRequired = !!this.control?.hasValidator(Validators.required);

    return `${this.field.label} ${isRequired ? '*' : ''}`;
  }

  get control(): AbstractControl | null {
    if (!this.field || !this.form) return null;

    return this.form.get(this.field.formControlName);
  }

  get error(): string {
    if (!this.control || !this.control.touched) return '';

    return controlErrorMessages(this.control);
  }

  transformValue(value: string): string {
    return this.field.mask === ean13Mask
      ? new FormatEan13Pipe().transform(value)
      : value;
  }
}
