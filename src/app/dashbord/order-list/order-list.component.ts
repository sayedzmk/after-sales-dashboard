import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { customHttpResponse } from 'src/app/services/shared-data';
import { LocalStorage } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orderersList :any[] = [];
  dataReady = false;

  constructor(private mService : OrdersService,
    private router:Router,
    private locastorge:LocalStorage) { }

  async ngOnInit(): Promise<void> {
    let response: customHttpResponse  = await this.mService.getOrders(0,100,0);
    if(response.hasError == false){
      this.orderersList = response.body;
      this.dataReady = true;
    }
    console.log(this.orderersList);
  }

}
