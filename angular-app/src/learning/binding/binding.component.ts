import { Component } from "@angular/core";

@Component({
    selector: "app-binding",
    templateUrl: "./binding.component.html",
    styleUrls: [],
})
export class BindingComponent {
    username:string;

    constructor() {
        this.username = 'Shreyash';
    }

    items:any = [
        {id:101, name:'Next js', fee:1800},
        {id:102, name:'Angular js', fee:1200},
        {id:103, name:'Vue js', fee:1400},
        {id:104, name:'React js', fee:1900}
    ] ;

    clicked:boolean = false;
    clickeditem:any = {name:'', fee:0}
    onItemClicked(item:any) {
        this.clicked = true;
        this.clickeditem = item
    }

    
}