import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = false): string {
    // if ( !mostrar ) {
    //   value = value.split('').map(char => '*').join('');
    // }
    // return value;
    return ( !mostrar ? value.split('').map(char => '*').join('') : value );
  }

}
