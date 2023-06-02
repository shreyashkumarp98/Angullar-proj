import { NgModule } from '@angular/core';
import { SPARouterModule } from './spa.router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { LoginComponent } from './pages/login/login.component';
import { SPAComponent } from './spa.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactListComponent } from './pages/contacts/contactlist.component';



@NgModule({
    imports: [
        SPARouterModule,
        CommonModule,
        FormsModule,
    ],
    exports: [SPAComponent],
    declarations: [LoginComponent, SPAComponent, ContactListComponent, HomeComponent],
    providers: [],
})
export class SPAModule { }
