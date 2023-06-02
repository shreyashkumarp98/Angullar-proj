import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';



@NgModule({
    imports: [CommonModule],
    exports: [ProductComponent],
    declarations: [ProductComponent],
    providers: [ProductService],
})
export class DIModule { }
