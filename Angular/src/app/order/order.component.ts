import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from './order-service.service';
import { order } from '../module/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders : order[];

  constructor(private service : OrderServiceService) { }

  ngOnInit() {
    this.service.listAllOrders().subscribe(data => this.orders = data);
  }

}
