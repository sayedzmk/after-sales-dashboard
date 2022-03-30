import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedData, customHttpResponse } from '../shared-data';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http : HttpClient) { }
  private addCategoryApi= 'Services/createservice';
  addCategory(name:string, base64Image : string,manufId:string,fees : number,userId :number ){
    let body ={
      "serviceName": name,
      "serviceNameAr": name,
      "manufacturerId": manufId,
      "serviceImage" : base64Image,
      "createdBy": userId,
      "servicesPrices": [
        {
          "serviceTypeId": 1,
          "serviceFees": fees
        },
    ]
    }
    console.log(body);
    this.http.post(`${SharedData.BASE_URL}${this.addCategoryApi}`,body).subscribe(
      (res)=>{
        console.log(res);
      }
    );
  }
  private getCategoryApi = "Services/Getservices2?";
  getCategory(lastrow : number ,rownumber : number ,manufacturerid:number) :Promise<any>{
    return new Promise((resolve)=>{
      this.http.get(`${SharedData.BASE_URL}${this.getCategoryApi}last_row=${lastrow}&rows_num=${rownumber}&manufacturerId=${manufacturerid}`).subscribe(data=>{
        console.log(data);
         resolve(new customHttpResponse(data,false,""));
      },err=>{
        resolve(SharedData.httpErrorHandler(err));
      })
    })
   
  }

  private editCategoryApi = "Services/editservice";
  editCategory(name:string, base64Image : string,manufId:string,fees : number){
    let body ={
      "serviceName": name,
      "serviceNameAr": name,
      "manufacturerId": manufId,
      "serviceImage" : base64Image,
      "servicesPrices": [
        {
          "serviceTypeId": 1,
          "serviceFees": fees
        },
    ]
    
    }
    console.log(body);
    return this.http.put(`${SharedData.BASE_URL}${this.editCategoryApi}`,body).subscribe(datares =>{
      console.log(datares);
    })
  }
}
