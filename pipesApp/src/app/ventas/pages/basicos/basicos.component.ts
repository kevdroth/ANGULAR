import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'Kevin';
  nombreUpper: string = 'KEVIN';
  nombreCompleto: string = 'KeVin ROth';

  fecha: Date = new Date();

}
