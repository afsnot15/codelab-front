import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

const material = [
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  MatSlideToggleModule,
  NgxMaskDirective,
  MatDatepickerModule,
  NgxMaskPipe
];

@Component({
  selector: 'cl-home',
  standalone: true,
  imports: [material],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers:[ provideNgxMask ( ), provideNativeDateAdapter()]
})
export class HomeComponent {}
