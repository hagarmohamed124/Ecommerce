import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcomdatapService {

  constructor( private _HttpClient:HttpClient) { }

  
  BaseUrl:string = 'https://ecommerce.routemisr.com/';

  getAllProducts():Observable<any>{
     return this._HttpClient.get(`${this.BaseUrl}api/v1/products`)
  }


  getProdutsDetails(id:string):Observable<any> {
     return this._HttpClient.get(`${this.BaseUrl}api/v1/products/${id}`);
  }
  


getCategories():Observable<any>{
return this._HttpClient.get(`${this.BaseUrl}api/v1/categories`)

}

}
