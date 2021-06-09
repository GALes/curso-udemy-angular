import { Component } from '@angular/core';
import {resolve} from "@angular/compiler-cli/src/ngtsc/file_system";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre      : string    = 'Capitan America';
  miNombre    : string    = 'yO geRMan';
  arreglo     : number[]  = [1,2,3,4,5,6,7,8,9,10];
  PI          : number    = Math.PI;
  porcentaje  : number    = 1.234567;
  salario     : number    =1234.5;
  fecha       : Date      = new Date();
  idiomaSel   : string    = 'es';
  idiomas     : string[]  = ['es', 'en', 'br'];
  videoUrl    : string    = 'https://www.youtube.com/embed/HR9A1IHHT7E';
  activar     : boolean   = true;

  valorPromesa = new Promise<string>((resolve, reject) => {
      setTimeout(
        () => {
          resolve('llego la data')
        },
        4500)
  });

  heroe =  {
    nombre: 'Logan',
    clave : 'Wolverine',
    edad  : 500,
    direccion: {
      calle : 'Primera',
      casa  : 20
    }
  }

}
