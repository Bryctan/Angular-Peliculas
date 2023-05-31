import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorPeliculaDetalleComponent } from './contenedor-pelicula-detalle.component';

describe('ContenedorPeliculaDetalleComponent', () => {
  let component: ContenedorPeliculaDetalleComponent;
  let fixture: ComponentFixture<ContenedorPeliculaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorPeliculaDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedorPeliculaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
