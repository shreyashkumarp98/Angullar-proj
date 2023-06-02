import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {filter,map} from 'rxjs'

const jwt_token='kfds9lk430lsdkfjsdlkfj232lkjlkjslf'
const httpOptions:any={
  headers:new HttpHeaders({
    'token':jwt_token,
    'Content-Type':'application/json'
  })
}

@Injectable({providedIn:'root'})
export class HttpService{
  constructor(private http:HttpClient){  }

  base_url='http://localhost:3000'
  //CRUD
  getFoods():any{
    return this.http.get(this.base_url+'/api/food')
    .pipe(filter(response=> response != undefined))
    .pipe( map( (resp:any)=>{
      console.log(resp)
      return resp
    }))
  }
  addFood(food:any){
   let body=JSON.stringify(food)
   return this.http.post(this.base_url+'/api/food/',body,httpOptions)
  }
  updateFood(food:any){
    let body=JSON.stringify(food)
   return this.http.put(this.base_url+'/api/food/'+food.id,body,httpOptions)
  }
  deleteFood(food:any){
    return  this.http.delete(this.base_url+'/api/food/'+food.id)
  }

}
