import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {
    let words:string[] = value.split(' ');
    if (todas) {
      words = words.map( nombre => nombre[0].toUpperCase() + nombre.toLowerCase().substr(1));
    }
    else {
      words[0] = words[0][0].toUpperCase() + words[0].substr(1).toLowerCase();
    }
    return words.join(' ');
  }

}
