import { NgModule } from '@angular/core';
import { NotifierComponent, ParentComponent, PriceQuoterComponent } from './dataflow.component';
import { CommonModule } from '@angular/common';



@NgModule({
    imports: [CommonModule],
    exports: [ParentComponent],
    declarations: [ParentComponent, PriceQuoterComponent, NotifierComponent],
    providers: [],
})
export class InterComp { }
