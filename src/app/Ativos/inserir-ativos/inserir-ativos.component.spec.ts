import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirAtivosComponent } from './inserir-ativos.component';

describe('InserirAtivosComponent', () => {
  let component: InserirAtivosComponent;
  let fixture: ComponentFixture<InserirAtivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirAtivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirAtivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
