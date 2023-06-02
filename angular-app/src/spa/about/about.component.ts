import { Component, OnInit } from '@angular/core';

@Component({
    template: `
    <div class="bg-warning text-center">
        <h3>About Qualcomm</h3>
        <p> Qualcomm started ............ </p>
    </div>
    `
})

export class AboutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}