import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalclibService {

  constructor() { }

  calcInt(p:number, n:number, r:number){
    //PNR/100
    return (p*n*r)/100
      }
}
