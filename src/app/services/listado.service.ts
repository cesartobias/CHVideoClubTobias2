import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Pelicula } from '../models/peliculas';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  url:string = ''

  constructor(
    private http: HttpClient,
    private utilService :  UtilService
  ) {
    this.url = this.utilService.URL_BASE + 'peliculas/'
  }


  /* GET */
  getPeliculas(id?:string|undefined) {
    return this.http.get<Pelicula[]>(this.url+(id||'')).pipe(
      catchError(this.utilService.handleError)
    )
  }

  /* POST */
  postPelicula(pelicula: Pelicula) {
    return this.http.post<Pelicula>(this.url, pelicula, this.utilService.getHttpOptions()).pipe(
      catchError(this.utilService.handleError)
    )
  }

  /* PUT */
  putPelicula(pelicula: Pelicula, id: string|undefined) {
    return this.http.put<Pelicula>(this.url + id, pelicula, this.utilService.getHttpOptions()).pipe(
      catchError(this.utilService.handleError)
    )
  }

  /* DELETE */
  delPelicula(id: string|undefined) {
    return this.http.delete<Pelicula>(this.url + id).pipe(
      catchError(this.utilService.handleError)
    )
  }
}
