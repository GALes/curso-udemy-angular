import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Lista} from "../../models/lista";
import {TodosService} from "../../services/todos.service";
import {Router} from "@angular/router";
import {AlertController, IonList} from "@ionic/angular";

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild(IonList) ionLista: IonList;
  @Input() terminada:boolean;

  public listas: Lista[];

  constructor(
    public todosService: TodosService,
    private router: Router,
    private alertController: AlertController
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

  async editarNombre(id: number) {
    let lista = this.todosService.obtenerLista(id);
    console.log('edicion')

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cambiar nombre de lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelado')
          }
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            console.log(data);
            if (data.titulo.length > 0) {
              lista.titulo = data.titulo;
              this.todosService.guardarStorage();
              this.ionLista.closeSlidingItems;
            }
            return;
          }
        }
      ]
    });

    await alert.present();
  }
}
