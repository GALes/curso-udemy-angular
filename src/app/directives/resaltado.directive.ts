import {Directive, ElementRef, Host, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(
    private el:ElementRef
  ) {
  }

  @Input("appResaltado") nuevoColor: string;

  @HostListener('mouseenter') mouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.nuevoColor || 'yellow';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }

}
