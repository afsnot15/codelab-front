import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaReceberConsultaComponent } from './conta-receber-consulta.component';

describe('ContasReceberConsultaComponent', () => {
  let component: ContaReceberConsultaComponent;
  let fixture: ComponentFixture<ContaReceberConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContaReceberConsultaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaReceberConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
