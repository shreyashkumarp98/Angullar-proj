import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {interval, Subscription } from 'rxjs';

@Component({
    selector: 'app-lifecycle',
    template: `
        <h2>Parent component- LifeCycle Demo</h2>
        <h3> Search: 
            <input type="text"  [(ngModel)]= "search" />
        </h3>
        <Child [search]="search"></Child>
    `
})

export class CompLifeCycleComponent implements OnInit {
    constructor() { }

    search:string='computer'

    ngOnInit() { }
}



@Component({
    selector: 'Child',
    template: `
    <div class="container bg-warning">
        <h3>Child Component</h3>
        <h4 class="text-primary">{{search}}</h4>
        <h4> Count: {{count}}</h4>

    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChildComponent implements OnInit, OnChanges, DoCheck {

    @Input()
    search:string=''

    count:number = 0

    //1.init 
    constructor(private cd:ChangeDetectorRef) {
        console.log(`In constructor: ${this.search}`)
        //this.cd.detach()
     }


     subscriber: Subscription | undefined 

    //2. on Init
    ngOnInit() {

        this.subscriber=interval(1000).subscribe(console.log)

        //called only once - Subscribing to websocket,/observable, custom event. Initilizing data/state by making ajax calls to REST api
        console.log(`In nOi: ${this.search}`)
        // setTimeout(()=>{
        //     this.cd.reattach()
        // }, 5000)

        setInterval(()=>{
            ++this.count
            console.log(`Count is ${this.count}`)
        }, 5000)
     }

     //3. changes

     ngOnChanges(changes: SimpleChanges): void {
        //called every time when state changes
        //make live ajax calls for live search for Rest api

        console.log(`In nOc: ${this.search}`)
        for (let key in changes) {
            console.log(`${key} changed
                - Current: ${changes[key].currentValue}
                - Previous: ${changes[key].previousValue}
            `)
        }
    }

    //4. check if condition matches then render else not
    ngDoCheck(): void {

        this.cd.detectChanges()
        //called every time when state changes
        //decide wheather to render DOM or not
        // console.log(`In dOc: ${this.search}`)
        // if (this.search.length >= 10) {
        //     this.cd.detectChanges()
        // }
    }

    //5. 
    ngAfterViewChecked(){
        console.log("nav is fired evrytime for UI customisation on real DOm")
    }


    //6
    ngOnDestroy():void{
        //this is fired only once when component removed from shadow DOm
        //perform cleaning the cache logic, unsubscribe to websocket, observables
        //memory leaks occurs here mostly

        this.subscriber?.unsubscribe()
    }
}