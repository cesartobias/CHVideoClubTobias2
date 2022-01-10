import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-listadousuarios',
  templateUrl: './listadousuarios.component.html',
  styleUrls: ['./listadousuarios.component.css']
})
export class ListadousuariosComponent implements OnInit {

  usuarios: Usuario[]=[]

  constructor( private usuarioService: UsuariosService) { }

  ngOnInit(): void {

    this.getUsuarios()
}

getUsuarios() {
    this.usuarioService.getUsuarios()
      .subscribe((usuarios: Usuario[]) => {
        console.log(usuarios)
        setTimeout(() => {
          this.usuarios = usuarios
        },500)
      })
  }

}
