import {Component, Input, OnInit} from '@angular/core';
import {Lista} from "../../models/lista";
import {TodosService} from "../../services/todos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;

  public listas: Lista[];

  constructor(
    public todosService: TodosService,
    private router: Router,
  ) {
    this.listas = todosService.listas;
  }

  ngOnInit() {}

  editarLista(lista: Lista) {
    if (this.terminada ) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`)
    }
    else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`)
    }
  }

  borrar(id: number) {
    this.todosService.listas = this.listas = this.listas.filter((value: Lista, index, arr) => value.id !== id);
    this.todosService.guardarStorage();
  }

}
