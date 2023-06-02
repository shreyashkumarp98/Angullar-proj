import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/spa/services/contact';
import { ContactService } from 'src/spa/services/contact.service';
import { Session } from 'src/spa/services/globals';

@Component({
  templateUrl: './contactlist.component.html'
})

export class ContactListComponent implements OnInit {
  constructor( private cs:ContactService) { }

  authenticated:boolean  |  undefined
  public contacts:Contact[] | undefined
  public selected:any={}
  public showDetails:boolean =false
  public username:string | undefined

  ngOnInit() {
   this.username=Session.username
   this.authenticated=Session.authenticated
   this.cs.getContacts()
       .then( (results:any)=>{
        this.contacts=results   //data
       })
  }

  selectedContact(contact:Contact){
    this.selected=contact.name
  }
}
