import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>

    <hr>

    <app-css></app-css>

    <p>
      Hola mundo desde app.component
    </p>

    <hr>

    <app-clases></app-clases>

    <hr>

    <h3>Directivas</h3>
    <p [appResaltado]="'red'" >
      Hola mundo
    </p>

    <hr>

    <h3>NgSwitch</h3>
    <app-ng-switch></app-ng-switch>

    <hr>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("constructor")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  ngOnChanges(): void {
    console.log("OnChanges")
  }
  ngDoCheck(): void {
    console.log("DoCheck")
  }
  ngAfterContentInit(): void {
    console.log("AfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("OnDestroy")
  }

}
