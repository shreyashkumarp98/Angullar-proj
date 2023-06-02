import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
    selector: 'app-di',
    templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {
    constructor(private ps:ProductService) {
        console.log("Service is injected");
     }

     product: any;
    ngOnInit() { 

        this.product = this.ps.getProduct();
    }
}