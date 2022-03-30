import { customHttpResponse, SharedData } from './../shared-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManuficturerService {

  constructor(private http : HttpClient) { }

  private addManuficturerApi= 'Manufacturer/createManufacturer';
  addManuficturer(name:string,address:string , base64Image : string,disc : string ){
    let body ={
      "manufacturerName": name,
      "manufacturerAddress": address,
      "manufacturerNameAr": name,
      "manufacturerlongitude": "0",
      "manufacturerlatitude": "0",
      "manufacturerLogo": base64Image,
      "manufacturerBio": disc,
      "manufacturerBioAr": disc,
      "createdBy": 0
    }
    console.log(body);
    this.http.post(`${SharedData.BASE_URL}${this.addManuficturerApi}`,body).subscribe(
      (res)=>{
        console.log(res);
      }
    );
  }
  private getMauficturerApi = "Manufacturer/GetManufacturer?";
  getManuficturer(lastrow : number ,rownumber : number) :Promise<customHttpResponse>{
    return new Promise((resolve)=>{
      this.http.get(`${SharedData.BASE_URL}${this.getMauficturerApi}last_row=${lastrow}&rows_num=${rownumber}`).subscribe(data=>{
        console.log(data);
         resolve(new customHttpResponse(data,false,""));
      },err=>{
        resolve(SharedData.httpErrorHandler(err));
      })
    })
   
  }
  private editMauficturerApi = "Manufacturer/editManufacturer";
  editMauficturer(disc : string ,manfName:string,base64Image : string,address:string){
    let body ={
      "manufacturerName": manfName,
      "manufacturerLogo": base64Image,
      "manufacturerBio": disc,
      "manufacturerBioAr": disc,
      "manufacturerAddress": address,
    
    }
    console.log(body);
    return this.http.put(`${SharedData.BASE_URL}${this.editMauficturerApi}`,body).subscribe(datares =>{
      console.log(datares);
    })
  }

}

