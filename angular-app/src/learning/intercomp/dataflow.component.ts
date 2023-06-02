export interface IPriceQuote {
    stockSymbol:string,
    lastPrice:number
}


export interface ILogger {
    logMessage(msg:string):void
}


import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


//container-responsible
@Component({
    selector: 'app-io',
    template: `
        <div class="container bg-success">
            <h2>Parent Component</h2>
            <h3 class="text-light"> Details : {{stockSymbol}} - {{price | currency:'USD'}}</h3>

            <price-quoter (lastPriceEvent)="priceQuoteHandler($event)"></price-quoter>
            <app-notifier [info]="stockInfo"></app-notifier>
        </div>
    `
})
export class ParentComponent implements OnInit {
    constructor() { }

    stockSymbol:string=''
    price:number=0
    stockInfo:IPriceQuote={'stockSymbol':'','lastPrice':0}
    ngOnInit() { }

    priceQuoteHandler(event:IPriceQuote) {
        this.stockSymbol = event.stockSymbol
        this.price= event.lastPrice
        this.stockInfo =event

    }
}


@Component({
    selector: 'price-quoter',
    template: `
        <div class="bg-secondary">
        <h3>Child Pricequoter Component</h3>
        <h3 class="text-light"> Child Pricequoter: {{company}} - {{price | currency:'USD'}}</h3>
    </div>
    `
})
export class PriceQuoterComponent implements OnInit, ILogger {

    logMessage(msg: string): void {
        console.log(msg);
    }

    company:string='Qualcomm'
    price:number=0

    @Output()
    lastPriceEvent:EventEmitter<IPriceQuote> = new EventEmitter()   //event-bublling

    constructor() { 
        window.setInterval(()=> {
            let priceQuote:IPriceQuote = {
                stockSymbol:this.company,
                lastPrice:100*Math.random()
            }

            this.price = priceQuote.lastPrice
            this.lastPriceEvent.emit(priceQuote)
        }, 1000);
    }

    ngOnInit() { }
}




@Component({
    selector: 'app-notifier',
    template: `
   <div class="bg-warning">
        <h4>I am notifier component</h4>
        <h4 class="bg-info">Notify: {{info.stockSymbol}} and {{info.lastPrice | currency:'USD'}}</h4>
    </div>
    `
})

export class NotifierComponent implements OnInit {
    constructor() { }

    @Input()
    info:IPriceQuote={'stockSymbol':'','lastPrice':0}


    ngOnInit() { }
}