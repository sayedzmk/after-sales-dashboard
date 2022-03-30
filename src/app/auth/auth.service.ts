import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { customHttpResponse, SharedData } from "../services/shared-data";

export interface AuthResponseData{
    kind:string;
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
    registered?:boolean;
}
@Injectable(
    {providedIn:'root'}
)
export class AuthService{
    
    constructor(private http:HttpClient){}
    signup(email:string,password:string){
       return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDWllnZqN_Ze69papJnAINtm6idSwLDM5Y',
            {
                email:email,
                password:password,
                returnSecureToken:true

            }
            )
            .pipe(
                catchError(this.handelError)
              );
            
        }
        private userLoginApi= "Users/login";
        login(email:String , password : string):Promise<any>{
          let body= {
            "email": email,
            "password": password,
          }
      
          return new Promise((resolve)=>{
            this.http.post(`${SharedData.BASE_URL}${this.userLoginApi}`,body).subscribe((res : any)=>{
              console.log(res);
              resolve(new customHttpResponse(res,false,""));
            },(err)=>{
              resolve(SharedData.httpErrorHandler(err));
            })
          })
      
        }


    private handelError(errorRes:HttpErrorResponse)
    {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
          return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct.';
                break;
        }
        return throwError(errorMessage);
      }

     
}