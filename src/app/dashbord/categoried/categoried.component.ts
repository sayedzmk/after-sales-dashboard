import { ManuficturerService } from './../../services/manuficturer/manuficturer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { LocalStorage } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-categoried',
  templateUrl: './categoried.component.html',
  styleUrls: ['./categoried.component.scss']
})
export class CategoriedComponent implements OnInit {
  image :any;
  imageb64 : any;
  categoryForm : FormGroup;

  selectedM = "";
  mList : any[]= [];

  constructor(
    private _sanitizer: DomSanitizer,
    private formBuilder : FormBuilder,
    private categService :CategoriesService,
    private mSerivce : ManuficturerService,
    private storage : LocalStorage
  ) { 
    this.categoryForm = this.formBuilder.group(
      {
        name: new FormControl('',{validators : [Validators.required,Validators.minLength(1)]}),
        manufId:['',[Validators.required,Validators.minLength(1)]],
        logo:['',[Validators.required,Validators.minLength(1)]],
        fees:['',[Validators.required,Validators.minLength(1)]],
      }
    );
    console.log(this.categoryForm);
  }
  
    async ngOnInit() {
     let response = await this.mSerivce.getManuficturer(0,100);
     if(response.hasError == false){
       this.mList = response.body;
     }

    }
  
    async readImage(imageBlobs : any){
       let file : File = imageBlobs.files[0];
       let notb64Str ="";
       (new Uint8Array(await file.arrayBuffer())).forEach((e)=>{
        notb64Str += String.fromCharCode(e)});
         this.imageb64 = btoa(notb64Str);
       console.log(this.imageb64);
       this.image = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                   + this.imageb64);
                   console.log(this.image);
     
    }
  
    onSubmit(){
      console.log(this.selectedM);
      console.log(this.categoryForm.valid);
      if(this.categoryForm.valid == true){
        let user =this.storage.retrive("userdata");
        this.categService.addCategory(this.categoryForm.value['name'],this.imageb64,this.selectedM,this.categoryForm.value['fees'],user['userId']);
      }else{
        alert("Please fill all the feilds")
      }
      console.log(this.image);
    }

    changeSelect(mId:string){
      console.log(mId);
      this.selectedM = mId;
    }

}
