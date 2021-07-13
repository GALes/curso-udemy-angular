import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: [
  ]
})
export class NgSwitchComponent implements OnInit {

  alerta: string = 'dark';

  constructor() { }

  ngOnInit(): void {
  }

  getRandomAlertType(): string {
    const alertTypes:string[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
    const alertTypePos = Math.floor(Math.floor(Math.random()*alertTypes.length));
    console.log({alertType: alertTypePos});
    return alertTypes[alertTypePos];
  }

}
