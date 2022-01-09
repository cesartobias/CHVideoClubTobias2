import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../models/usuarios';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url:string = ''

  constructor(
    private http: HttpClient,
    private utilService :  UtilService
  ) {
    this.url = this.utilService.URL_BASE + '/usuarios/'
  }



    /* GET */
    getUsuarios() {
      return this.http.get<Usuario[]>(this.url).pipe(
        catchError(this.utilService.handleError)
      )
    }
  
    /* POST */
    postUsuario(usuario: Usuario) {
      return this.http.post<Usuario>(this.url, usuario, this.utilService.getHttpOptions()).pipe(
        catchError(this.utilService.handleError)
      )
    }  
}
