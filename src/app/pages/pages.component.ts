import { Component } from '@angular/core';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'cl-pages',
  standalone: true,
  imports: [HomeComponent, LayoutComponent, RouterOutlet],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
})
export class PagesComponent {}
