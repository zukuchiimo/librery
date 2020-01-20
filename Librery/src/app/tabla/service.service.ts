import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn:'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { 
   
 }
 

    getLibros(url : string){
      return this.http.get(url);
    }
}
