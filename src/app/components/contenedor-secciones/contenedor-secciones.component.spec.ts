import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorSeccionesComponent } from './contenedor-secciones.component';

describe('ContenedorSeccionesComponent', () => {
  let component: ContenedorSeccionesComponent;
  let fixture: ComponentFixture<ContenedorSeccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorSeccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorSeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
