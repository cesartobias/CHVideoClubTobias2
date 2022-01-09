import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/models/usuarios';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
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

 
    constructor(private fb: FormBuilder, private toast: HotToastService,private router: Router) { }

    onSubmit(model:Usuarios) {
      console.log('usuario login correctamente: ', model);
      console.warn(this.loginForm.value);
     this.toast.success('Bienvenido!!!!');
     this.router.navigateByUrl('/home');
    }
 }
