import { Injectable } from "@angular/core";
import { CONTACTS } from "./mock-contacts";

@Injectable({providedIn:'root'})
export class ContactService {

    //http.get

    getContacts() {
        return Promise.resolve(CONTACTS)
    }

}