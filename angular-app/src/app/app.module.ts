import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from 'src/learning/binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ProductComponent } from 'src/learning/di/product.component';
import { DIModule } from 'src/learning/di/di.module';
import { InterComp } from 'src/learning/intercomp/intercomp.module';
import { ChildComponent, CompLifeCycleComponent } from 'src/learning/lifecycle/complifecycle.component';
import { HttpComponent } from 'src/learning/http/http.component';
import { WeatherComponent } from 'src/learning/http/weather.component';
import { SPAModule } from 'src/spa/spa.module';
import { SPAComponent } from 'src/spa/spa.component';
import { CalclibModule } from 'calclib';
import { WorkerComponent } from 'src/learning/webworkerdemo/worker.component';
import { SquarePipe } from 'src/learning/pipes/square.pipe';
import { GridComponent } from 'src/learning/grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';




@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    CompLifeCycleComponent,
    ChildComponent,
    HttpComponent,
    WeatherComponent,
    WorkerComponent,


    SquarePipe,
    GridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DIModule,
    InterComp,
    HttpClientModule,
    ReactiveFormsModule,
    SPAModule,
    CalclibModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
