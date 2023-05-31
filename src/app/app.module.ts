import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ContenedorSeccionesComponent } from './components/contenedor-secciones/contenedor-secciones.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { ContenedorPeliculasComponent } from './components/contenedor-peliculas/contenedor-peliculas.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ContenedorPeliculaDetalleComponent } from './components/contenedor-pelicula-detalle/contenedor-pelicula-detalle.component';
import { PeliculaDetalleComponent } from './components/pelicula-detalle/pelicula-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContenedorSeccionesComponent,
    SeccionComponent,
    ContenedorPeliculasComponent,
    PeliculasComponent,
    ContenedorPeliculaDetalleComponent,
    PeliculaDetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
