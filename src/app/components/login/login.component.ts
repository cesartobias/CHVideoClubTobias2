import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuarios';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
    loginForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['',Validators.required]
    });

     constructor(
      private fb: FormBuilder,
      private toast: HotToastService,
      private router: Router,
      private usuarioService: UsuariosService) { }

    onSubmit(model:Usuario) {
    this.usuarioService.getUsuarios()
        .subscribe((usuarios: Usuario[]) => {
          let usuario = usuarios.find(usuario => usuario.usuario == model.usuario && usuario.password == model.password)
          if(usuario){
             this.toast.success('Bienvenido. Login correcto !!!!');
             this.router.navigateByUrl('/home');
          }
          else {
            this.usuarioService.postUsuario(model)
              .subscribe((usuario: Usuario) => {
                this.router.navigateByUrl('/home');
              })
          }
        })
    }
}
