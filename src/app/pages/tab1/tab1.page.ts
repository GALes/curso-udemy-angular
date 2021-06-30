import { Component } from '@angular/core';
import {Lista} from "../../models/lista";
import {TodosService} from "../../services/todos.service";
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listas: Lista[];

  constructor(
    public todosService: TodosService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.listas = todosService.listas;
  }

  async agregarLista() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
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
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if (data.titulo.length === 0) {
              return;
            }
            const listaId = this.todosService.crearLista(data.titulo);
            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          }
        }
      ]
    });

    await alert.present();
    // this.router.navigateByUrl('/tabs/tab1/agregar')
  }
}
