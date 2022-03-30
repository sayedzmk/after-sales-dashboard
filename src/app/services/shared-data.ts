export class SharedData {
    public static BASE_URL = "https://toitogo.com/aftersalesapi/api/";
    public static httpErrorHandler(err:any){
        if(err.error && err.error.message){
            return new customHttpResponse({},true,err.error.message as string);
        }else{
            return new customHttpResponse({},true,"Connection error");
        }
    }
}


export class customHttpResponse{
    hasError : boolean;
    errorMsg : string;
    body : any;

    constructor(body:any,hasError:boolean,errorMsg:string){
        this.body=body;
        this.hasError=hasError;
        this.errorMsg=errorMsg;
        
    }
}

