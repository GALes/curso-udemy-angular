import { Component, OnInit } from '@angular/core';
import { faSave, faSync } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  faSave = faSave;
  faSync = faSync;

  alertType: string = "alert-danger";
  mundoEnPeligro: boolean = true;
  procesando: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.mundoLoco();
  }

  mundoLoco(): void {
    setInterval( () => {
      this.mundoEnPeligro = !this.mundoEnPeligro
    }, 1000 )
  }

  procesar(): void {
    this.procesando = true;
    setTimeout(() => this.procesando = false, 3000)
  }

}
