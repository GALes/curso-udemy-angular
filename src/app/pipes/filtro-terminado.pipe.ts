import { Pipe, PipeTransform } from '@angular/core';
import {Lista} from "../models/lista";

@Pipe({
  name: 'filtroTerminado',
  pure: false
})
export class FiltroTerminadoPipe implements PipeTransform {

  transform(listas: Lista[], terminada = true): Lista[] {
    return listas.filter( (lista) => lista.terminada === terminada );
  }

}
