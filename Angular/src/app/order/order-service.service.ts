import { Injectable } from '@angular/core';
import { order } from '../module/order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  orders : order[];
  order : order;

  constructor(public http : HttpClient) { }

  listAllOrders(){
    return this.http.get<order[]>("http://localhost:8888/order/all")
  }
  
}
