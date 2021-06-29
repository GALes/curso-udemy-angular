import { Component } from '@angular/core';
import {Lista} from "../../models/lista";
import {TodosService} from "../../services/todos.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listas: Lista[];

  constructor(
    todosService: TodosService
  ) {
    this.listas = todosService.listas;
  }
}
