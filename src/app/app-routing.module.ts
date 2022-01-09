import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ListadoComponent } from './components/listado/listado.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
   {  path:'', redirectTo:'/login', pathMatch:'full'},
   {  path:'login',component: LoginComponent },
   {  path:'registro',component: RegistroComponent },
   {  path:'listado',component: ListadoComponent },
   {  path:'carrito',component: CarritoComponent },
   {  path:'home',component: HomeComponent },
   {  path:'**', redirectTo:'/login'}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
