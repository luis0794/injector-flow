import { Component } from '@angular/core';

export interface Results {
  a: number;
  b: number;
  c: number;
  operatingTime: string;
}

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
  results: Results[];

  constructor() {
    this.speedLight = 100;
    this.damageOne = 0;
    this.damageTwo = 0;
    this.damageThree = 0;
    this.results = [
      {
        a: 100,
        b: 100,
        c: 100,
        operatingTime: 'Infinito'
      }
    ];
  }

  calc(): void {
    this.results[0].a = Number(this.results[0].a) - this.damageOne;
  }

}
