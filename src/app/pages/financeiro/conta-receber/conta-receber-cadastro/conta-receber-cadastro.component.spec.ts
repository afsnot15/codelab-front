import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasReceberCadastroComponent } from './conta-receber-cadastro.component';

describe('ContasReceberCadastroComponent', () => {
  let component: ContasReceberCadastroComponent;
  let fixture: ComponentFixture<ContasReceberCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContasReceberCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContasReceberCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
