import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor() {
        window.localStorage.setItem('jwt', '12345')
     }

    
    isAuth():boolean {
        return !!window.localStorage.getItem('jwt')
    }
}