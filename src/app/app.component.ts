import { Component } from '@angular/core';

export interface Injector {
  name: string;
  actualCapacity: number;
  extraCapacity: number;
  damage: number;
  operatingTime: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  speedLight: number;
  operatingTime: string;
  injectors: Injector[];

  constructor() {
    this.speedLight = 100;
    this.operatingTime = 'Infinito';

    this.injectors = [
      {
        name: 'Inyector A',
        actualCapacity: 100,
        extraCapacity: 0,
        damage: 0,
        operatingTime: 100
      },
      {
        name: 'Inyector B',
        actualCapacity: 100,
        extraCapacity: 0,
        damage: 0,
        operatingTime: 100
      },
      {
        name: 'Inyector C',
        actualCapacity: 100,
        extraCapacity: 0,
        damage: 0,
        operatingTime: 100
      }
    ];
  }

  calcA(): void {
    this.calculateDefaultCapacity();
    this.injectors[0].actualCapacity = this.injectors[0].damage === 100 ? 0 : 100 -  this.injectors[0].damage;
  }

  calcB(): void {
    this.calculateDefaultCapacity();
    this.injectors[1].actualCapacity = this.injectors[1].damage === 100 ? 0 : 100 -  this.injectors[1].damage;
  }

  calcC(): void {
    this.calculateDefaultCapacity();
    this.injectors[2].actualCapacity = this.injectors[2].damage === 100 ? 0 : 100 -  this.injectors[2].damage;
  }

  calculateDefaultCapacity(): void {
    if (this.injectors[0].damage === 0 && this.injectors[1].damage === 0 && this.injectors[2].damage === 0) {
      this.injectors[0].actualCapacity = this.speedLight;
      this.injectors[1].actualCapacity = this.speedLight;
      this.injectors[2].actualCapacity = this.speedLight;
    }
  }

  /*calculateOperatingTime(): string {
    let operatingTimeResponse = 'Infinito';

    if (this.injectors[0].damage + this.injectors[0].actualCapacity === 100 &&
      this.injectors[1].damage + this.injectors[1].actualCapacity === 100 &&
      this.injectors[2].damage + this.injectors[2].actualCapacity === 100) {
      operatingTimeResponse = 'Infinito';
    }
    return operatingTimeResponse;
  }*/

}
