import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAtivosComponent } from './buscar-ativos.component';

describe('BuscarAtivosComponent', () => {
  let component: BuscarAtivosComponent;
  let fixture: ComponentFixture<BuscarAtivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarAtivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAtivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
