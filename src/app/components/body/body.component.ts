import {Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  nombre = 'Yo';
  apellido = 'German';
  private frase: any = {
    mensaje: 'chachara chachara',
    autor: 'alguien'
  };
  mostrar = true;
  personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octupus'];

  public getFrase(): any {
    return this.frase;
  }

}
