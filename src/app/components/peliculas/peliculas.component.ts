import { Component , OnInit} from '@angular/core';
import { peliculas_stock } from 'src/app/models/Peliculas';
import { secciones_stock } from 'src/app/models/Secciones';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas = peliculas_stock;
  secciones = secciones_stock;
  idseccion: number = 0;
  filtro:any = []
  nombre:String = ""
  constructor(private routeActivate: ActivatedRoute, private router:Router) {

  }

  ngOnInit(): void {
    this.idseccion = this.routeActivate.snapshot.params["idsec"];

    this.peliculas.forEach((pelicula) => {
      if (this.idseccion == pelicula.idseccion)
      {
        this.filtro.push(pelicula)
      }
    });

    this.secciones.forEach((seccion) => {
      if (this.idseccion == seccion.idsec) {
        this.nombre = seccion.name
      }
    })
  }

  verdetalle(id:number) {
    this.router.navigate(['/pelicula-detalle', id]);
  }
  
}