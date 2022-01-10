import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuarios';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {
    registroForm = this.fb.group({
      nombre: ['', Validators.required],
      usuario: ['', Validators.required],
      password: ['',Validators.required]
    });

 
    constructor(private fb: FormBuilder,
       private toast: HotToastService,
       private router: Router,
       private usuarioService: UsuariosService
       ) { }

    onSubmit(model:Usuario) {
      this.usuarioService.getUsuarios()
        .subscribe((usuarios: Usuario[]) => {
          let usuario = usuarios.find(usuario => usuario.usuario == model.usuario)
          if(usuario) 
           console.log("Usuario ya existe")
          else {
            this.usuarioService.postUsuario(model)
              .subscribe((usuario: Usuario) => {
                this.router.navigateByUrl('/home');
              })
          }
        })
    }
 }
