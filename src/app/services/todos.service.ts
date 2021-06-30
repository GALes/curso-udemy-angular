import { Injectable } from '@angular/core';
import {Lista} from "../models/lista";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  public listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
    // const lista1 = new Lista('Recolectar piedras del bolazo');
    // const lista2 = new Lista('Heroes a desaparecer');
    //
    // this.listas.push(lista1, lista2);
  }

  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  }

  obtenerLista (id: string | number) {
    id = Number(id);
    return this.listas.find(listaData => listaData.id === id );
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    const data = localStorage.getItem('data')
    this.listas = data ? JSON.parse(data) : [];
  }
}
