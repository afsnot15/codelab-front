import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IFormField } from '../../interfaces/form-field.interface';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { Subject, debounceTime, takeUntil, tap } from 'rxjs';

const form = [ReactiveFormsModule, FormsModule]
const components = [MatInputModule, MatFormFieldModule, MatSelectModule];

@Component({
  selector: 'cl-form-fields-list',
  standalone: true,
  imports: [...form, ...components, CommonModule]  ,
  templateUrl: './form-fields-list.component.html',
  styleUrl: './form-fields-list.component.scss'
})
export class FormFieldsListComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) fields!: IFormField[];
  @Output() changeEmitter = new EventEmitter<void>();

  private unsubscribe$ = new Subject<void>();

  ngOnInit() {
    this.watchForm();
  }


  private watchForm(): void {
    this.form.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        debounceTime(1000),
        tap(() => this.changeEmitter.emit()),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
