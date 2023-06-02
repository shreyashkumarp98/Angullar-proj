import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-worker',
    templateUrl: './worker.component.html'
})

export class WorkerComponent implements OnInit {

    factorialresult!:number
    factorialinput:number=1000

    constructor() { }

    ngOnInit() {
        this.calculateFactorial();
     }

     calculateFactorial(){
        if (typeof(Worker) !=='undefined') {
            const worker= new Worker(new URL("../../app/my-worker.worker.ts", import.meta.url))

            worker.onmessage=({data})=>{
                console.log(data)
                this.factorialresult =data
            }
            worker.postMessage(this.factorialinput)  //actually starts the worker 
        }
        else
            alert("Sorry ....worker not support....upgrade your browser to latest")
     }
}