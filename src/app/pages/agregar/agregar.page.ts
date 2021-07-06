import { Component, OnInit } from '@angular/core';
import {TodosService} from "../../services/todos.service";
import {ActivatedRoute} from "@angular/router";
import {Lista} from "../../models/lista";
import {ListaItem} from "../../models/lista-item";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem = '';

  constructor(
    public todosService: TodosService,
    private route: ActivatedRoute
  ) {
    const listaId = this.route.snapshot.paramMap.get('listaId');
    this.lista = todosService.obtenerLista(listaId);
    console.log(this.lista);
  }

  ngOnInit() {

  }

  agregarItem () {
    if (this.nombreItem.length === 0) {
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
    this.todosService.guardarStorage();
  }

  cambioCheck(item: ListaItem) {
    const pendientes = this.lista.pendientes;

    if (pendientes === 0) {
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    }
    else {
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
    }

    this.todosService.guardarStorage();
    console.log({lista: this.lista});
  }

  borrar (i: number) {
    this.lista.items.splice(i, 1);
    this.todosService.guardarStorage();
  }

}
