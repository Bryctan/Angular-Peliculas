import { Component, OnInit } from '@angular/core';
import { peliculas_stock } from 'src/app/models/Peliculas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit {
  peliculas = peliculas_stock
  idpelicula:number =0;
  detallepelicula:any;

  constructor (private routeActivate:ActivatedRoute){
  
  }

  ngOnInit(): void {
    this.idpelicula = this.routeActivate.snapshot.params["id"];
    this.peliculas.forEach((pelicula) => {
      if (pelicula.id == this.idpelicula) {
        this.detallepelicula = pelicula;
      }
    })
  }

}
