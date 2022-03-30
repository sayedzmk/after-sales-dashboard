import { Injectable } from '@angular/core';
import { customHttpResponse, SharedData } from './../shared-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private getorderApi= 'Orders/GetsOrders?';
  constructor(private http : HttpClient) { }
  getOrders(lastrow : number ,rownumber : number ,orderid:number) :Promise<customHttpResponse>{
    return new Promise((resolve)=>{
      this.http.get(`${SharedData.BASE_URL}${this.getorderApi}last_row=${lastrow}&rows_num=${rownumber}&OrderId=${orderid}`).subscribe(data=>{
        console.log(data);
         resolve(new customHttpResponse(data,false,""));
      },err=>{
        resolve(SharedData.httpErrorHandler(err));
      })
    })
}
}
