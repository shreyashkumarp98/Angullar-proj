import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({

    template: `
        <h3 class="bg-primary text-light">
            You have selected  {{name}}   
            <h5>Show the profile of {{name}} </h5>    
        </h3>
    `
})

export class ShowComponent implements OnInit {
    constructor(private route:ActivatedRoute) { }
    name:string | undefined
    ngOnInit() {
        this.name = this.route.snapshot.params['selected'];

     }
}