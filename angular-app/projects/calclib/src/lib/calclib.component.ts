import { Component } from '@angular/core';
import { CalclibService } from './calclib.service';

@Component({
  selector: 'lib-calclib',
  template: `
    <h2 style="background:yellow">
      Int. amount is {{intAmount}}
  </h2>
  `,
  styles: [
  ]
})
export class CalclibComponent {

  constructor(private calc:CalclibService){

  }

  intAmount:number = 0

  ngOnInit() {
    this.intAmount = this.calc.calcInt(5000, 10, 7)
   }



}
