import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, debounceTime, takeUntil, tap } from 'rxjs';
import { IFormField } from '../../interfaces/form-field.interface';
import { FormFieldComponent } from '../form-field/form-field.component';

@Component({
  selector: 'cl-form-fields-list',
  standalone: true,
  imports: [FormFieldComponent],
  templateUrl: './form-fields-list.component.html',
  styleUrl: './form-fields-list.component.scss',
})
export class FormFieldsListComponent implements OnInit, OnDestroy{
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
