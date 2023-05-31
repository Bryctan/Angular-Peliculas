import { Component } from '@angular/core';
import { secciones_stock } from 'src/app/models/Secciones';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent {
  secciones = secciones_stock

  constructor (private router :Router ) {
  }

  entrar (idsec:number) {
    this.router.navigate(['/seccion', idsec])
  }
}
