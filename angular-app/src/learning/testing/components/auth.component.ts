import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-auth',
    template: `
        <a [hidden] = 'needsLogin()'>Login</a>
    `
})

export class AuthComponent implements OnInit {
    constructor(private auth:AuthService) { }


    needsLogin():boolean{
        return this.auth.isAuth()
    }

    ngOnInit() { 
        window.localStorage.setItem('jwt', '12345')
    }
}