import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Session } from '../globals';

@Injectable({providedIn: 'root'})
export class LoadGuard implements CanLoad {
    constructor() { }

    canLoad(route: Route) {
        if (Session.authenticated){
            alert("Lazy loading the about module")
            return true
        }
        else{
            alert("Sorry.......login to download about module")
            return false
        }
    }
}