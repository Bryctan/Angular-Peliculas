import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorSeccionesComponent } from './components/contenedor-secciones/contenedor-secciones.component';
import { ContenedorPeliculasComponent } from './components/contenedor-peliculas/contenedor-peliculas.component';
import { ContenedorPeliculaDetalleComponent } from './components/contenedor-pelicula-detalle/contenedor-pelicula-detalle.component';

const routes: Routes = [
  {path:'', component: ContenedorSeccionesComponent},
  {path:'seccion/:idsec', component: ContenedorPeliculasComponent},
  {path:'pelicula-detalle/:id', component: ContenedorPeliculaDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
