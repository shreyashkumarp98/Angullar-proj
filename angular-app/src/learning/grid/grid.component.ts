import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
})
export class GridComponent implements OnInit {

    title='AG-Grid Demo'
    rowData:any
    constructor(private http: HttpClient) {

    }
    ngOnInit(): void {

        let url ='https://jsonplaceholder.typicode.com/users' 
        this.rowData  = this.http.get(url)

        
        
    }

    columnDefs:ColDef[]=[
        {headerName:'UserID', field:'id', sortable:true, filter:true, checkboxSelection:true},
        {headerName:'User name', field:'name', sortable:true, filter:true,},
        {headerName:'Email', field:'email', sortable:true, filter:true,}
    ]

 
}