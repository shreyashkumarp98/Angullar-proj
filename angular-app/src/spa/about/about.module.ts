import { NgModule } from '@angular/core';
import aboutRoute from './about.route';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';



@NgModule({
    imports: [aboutRoute, CommonModule],
    exports: [AboutComponent],
    declarations: [AboutComponent],
    providers: [],
})
export class AboutModule { }
