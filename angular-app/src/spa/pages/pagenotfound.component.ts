import { Component, OnInit } from '@angular/core';

@Component({
    
    template: `
        <div class="bg-danger text-warning text-center">
            <h2>404- Page not Found</h2>
            <p class="text-light"> Sorry....Page is not found</p>
        </div>
    `
})

export class PageNotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}