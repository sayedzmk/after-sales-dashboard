import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { LocalStorage } from 'src/app/services/local-storage.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-eidt-categories',
  templateUrl: './eidt-categories.component.html',
  styleUrls: ['./eidt-categories.component.scss']
})
export class EidtCategoriesComponent implements OnInit {

  image: any;
  imageb64: any;
  data:any;
  categoryForm : FormGroup;

  selectedM = "";
  mList : any[]= [];

  constructor(
    private _sanitizer: DomSanitizer,
    private formBuilder : FormBuilder,
    private categService :CategoriesService,
    private localstore:LocalStorage,
    private router:Router
  ) { 
    this.data= this.localstore.retrive('categ');

    this.categoryForm = this.formBuilder.group(
      {
        name: new FormControl(this.data['serviceName'],{validators : [Validators.required,Validators.minLength(1)]}),
        manufId:[this.data['manufacturerId'],[Validators.required,Validators.minLength(1)]],
        logo:[this.data['serviceImage'],[Validators.required,Validators.minLength(1)]],
        fees:[this.data['serviceFees'],[Validators.required,Validators.minLength(1)]],
       
      }
    );
    console.log(this.categoryForm);
  }


  ngOnInit(): void {
  }

  async readImage(imageBlobs: any) {
    let file: File = imageBlobs.files[0];
    let notb64Str = "";
    (new Uint8Array(await file.arrayBuffer())).forEach((e) => {
      notb64Str += String.fromCharCode(e)
    });
    this.imageb64 = btoa(notb64Str);
    console.log(this.imageb64);
    this.image = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
      + this.imageb64);
    console.log(this.image);

  }
  onSubmit() {

    console.log(this.categoryForm.valid);
    if(this.categoryForm.valid == true){
      this.categService.editCategory(this.categoryForm.value['name'],this.imageb64,this.selectedM,this.categoryForm.value['fees']);
    }else{
      alert("Please fill all the feilds")
    }
    console.log(this.image);
    this.router.navigate(['dashboard'])
  }
  changeSelect(mId:string){
    console.log(mId);
    this.selectedM = mId;
  }

}
