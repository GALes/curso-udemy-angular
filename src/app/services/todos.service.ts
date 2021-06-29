import { Injectable } from '@angular/core';
import {Lista} from "../models/lista";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  public listas: Lista[] = [];

  constructor() {
    const lista1 = new Lista('Recolectar piedras del bolazo');
    const lista2 = new Lista('Heroes a desaparecer');

    this.listas.push(lista1, lista2);
  }
}
