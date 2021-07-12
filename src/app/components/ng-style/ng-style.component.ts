import { Component, OnInit } from '@angular/core';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-ng-style',
  template: `
<!--    <p [ngStyle]="{'font-size': tamanio + 'px', 'color': 'red'}">-->
    <p [style.fontSize.px]="tamanio" >
        Hola mundo, esta es una etiqueta HTML
    </p>
    
    <button class="btn btn-primary m-1" (click)="tamanio = tamanio + 5">
        <fa-icon [icon]="faPlus"></fa-icon>
    </button>

    <button class="btn btn-primary m-1" (click)="tamanio = tamanio - 5">
        <fa-icon [icon]="faMinus"></fa-icon>
    </button>
    
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  faPlus = faPlus;
  faMinus = faMinus;

  tamanio: number = 20;
  constructor() { }

  ngOnInit(): void {
  }

}
