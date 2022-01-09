import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/models/usuarios';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
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

 
    constructor(private fb: FormBuilder, private toast: HotToastService,private router: Router) { }

    onSubmit(model:Usuarios) {
      console.log('usuario guardado correctamente: ', model);
      console.warn(this.registroForm.value);
     this.toast.success('Usuario Guardado Correctamente');
     this.router.navigateByUrl('/home');

    }
 }
