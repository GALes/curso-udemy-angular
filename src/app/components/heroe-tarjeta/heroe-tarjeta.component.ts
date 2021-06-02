import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Heroe, HeroesService} from "../../services/heroes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() idx: number = 0;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(
    private router:Router
  ) {
    this.heroeSeleccionado = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  verHeroe() {
    // this.router.navigate(['/heroe', this.idx])
    this.heroeSeleccionado.emit(this.idx);
  }

}
