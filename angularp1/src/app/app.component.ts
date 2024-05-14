import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DataService } from "./services/data.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dataService = inject(DataService);

  todosLosDatos: any[] = [];

  obtenerTodosLosDatos(){
    this.dataService.obtenerDatos().subscribe((respuesta: any)=>{
        /* console.log("respuesta: ", respuesta); */
        if (respuesta.results) {
          this.todosLosDatos = respuesta.results;
          /* console.log("bien"); */
        } else {
          console.log("ocurrio un error, no existe respuesta");
        }
    })
  }
  ngOnInit(){
    this.obtenerTodosLosDatos();
  }
}
