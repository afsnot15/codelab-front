import { Component, Input } from '@angular/core';
import { IFormField } from '../../interfaces/form-field.interface';
import {
  AbstractControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { controlErrorMessages } from '../../helpers/form-error.helper';

const form = [ReactiveFormsModule, FormsModule];
const components = [
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatFormFieldModule,
];

@Component({
  selector: 'cl-form-field',
  standalone: true,
  imports: [...form, ...components],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
})
export class FormFieldComponent {
  @Input({ required: true }) field!: IFormField;
  @Input({ required: true }) form!: FormGroup;

  get label():string {
    const isRequired = !!this.control?.hasValidator(Validators.required);

    console.log( `${this.field.label} ${isRequired ? '*' : ''}`)

    return `${this.field.label} ${isRequired ? '*' : ''}`

  }

  get control(): AbstractControl | null {
    if (!this.field || !this.form) return null;

    return this.form.get(this.field.formControlName);
  }

  get error(): string {
    if (!this.control || !this.control.touched) return '';

    return controlErrorMessages(this.control);
  }
}
