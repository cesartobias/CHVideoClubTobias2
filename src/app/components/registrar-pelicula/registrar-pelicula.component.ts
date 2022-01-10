import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/peliculas';
import { ListadoService } from 'src/app/services/listado.service';

@Component({
  selector: 'app-registrar-pelicula',
  templateUrl: './registrar-pelicula.component.html',
  styleUrls: ['./registrar-pelicula.component.css']
})
export class RegistrarPeliculaComponent implements OnInit {

  peliculas: Pelicula[] = []

  constructor( 
    private listadoService: ListadoService
    ) { }

  ngOnInit(): void {
  }

  getPeliculaInicial() {
    return {
      nombre: null,
      tipoPelicula: null,
      year: null,
      stock: null,
      precio: null,
      url: null
    }
  }
 pelicula: Pelicula = this.getPeliculaInicial()

 limpiaPelicula() {
  this.pelicula = this.getPeliculaInicial()
}

 postPelicula() {
  this.listadoService.postPelicula(this.pelicula)
    .subscribe((pelicula: Pelicula) => {
      console.log(pelicula)

      this.peliculas.push(pelicula)
      this.limpiaPelicula()
    })
}

}
