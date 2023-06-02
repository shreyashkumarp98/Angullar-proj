import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Session } from '../globals';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(Session.authenticated == true)
        return true;
        else{
            alert("Sorry....Please login")
            return false;
        }
        
    }
}