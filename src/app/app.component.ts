import { HttpClient } from '@angular/common/http';
import { getSafePropertyAccessString } from '@angular/compiler';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'videoclub';
  readonly ROOT_URL='https://61b9322038f69a0017ce5f3a.mockapi.io/';
 
  peliculas:any;
  
  constructor(private http: HttpClient){}
     getPeliculas() { this.peliculas = this.http.get(this.ROOT_URL + 'peliculas')}
  
}
