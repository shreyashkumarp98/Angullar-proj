import { Injectable } from "@angular/core"
import { Product } from "./product"

interface ILogger{
    logMessage(msg:string):void
}


@Injectable()
export class ProductService implements ILogger{
    logMessage(msg: string): void {
        console.log(msg)
    }
    
    getProduct():Product{
        this.logMessage('someone invoked getProduct()');
        return new Product(110, 'Computer', 'computer for gaming', 5440);
        //http.get(url)
    }

}