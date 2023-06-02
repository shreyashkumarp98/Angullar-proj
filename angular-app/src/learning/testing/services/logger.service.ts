import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logInfo(info:string){
    console.log('Logged:' +info)

    return 'Logged: jwt test done'
  }
}
