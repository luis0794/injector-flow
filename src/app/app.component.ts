import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  damageOne: number;
  damageTwo: number;
  damageThree: number;
  speedLight: number;
  resultA: number;
  resultB: number;
  resultC: number;
  operatingTime: string;

  constructor() {
    this.speedLight = 100;
    this.damageOne = 0;
    this.damageTwo = 0;
    this.damageThree = 0;
    this.resultA = 100;
    this.resultB = 100;
    this.resultC = 100;
    this.operatingTime = 'Infinito';
  }

  calc(): void {
    if (this.damageOne === 0) { this.resultA = 100; }
    this.resultA = Number(this.resultA) - this.damageOne;
  }

}
