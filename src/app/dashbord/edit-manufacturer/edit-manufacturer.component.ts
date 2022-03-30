import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { LocalStorage } from 'src/app/services/local-storage.service';
import { ManuficturerService } from 'src/app/services/manuficturer/manuficturer.service';

@Component({
  selector: 'app-edit-manufacturer',
  templateUrl: './edit-manufacturer.component.html',
  styleUrls: ['./edit-manufacturer.component.scss']
})
export class EditManufacturerComponent implements OnInit {
  image: any;
  imageb64: any;
  data:any;

  manifacturerForm : FormGroup;

  constructor(
    private _sanitizer: DomSanitizer,
    private formBuilder : FormBuilder,
    private manuficService :ManuficturerService,
    private localstore:LocalStorage,
    private router:Router
  ) { 
    this.data= this.localstore.retrive('manfa');

    this.manifacturerForm = this.formBuilder.group(
      {
        name: new FormControl(this.data['manufacturerName'],{validators : [Validators.required,Validators.minLength(1)]}),
        logo:["",[Validators.required,Validators.minLength(1)]],
        disc:[this.data['manufacturerBio'],[Validators.required,Validators.minLength(1)]],
        address:[this.data['manufacturerAddress'],[Validators.required,Validators.minLength(1)]],
       
      }
    );
    console.log(this.manifacturerForm);
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

    console.log(this.manifacturerForm.valid);
    if(this.manifacturerForm.valid == true){
      this.manuficService.editMauficturer(this.manifacturerForm.value['name'],this.manifacturerForm.value['address'],
      this.imageb64 ,
      this.manifacturerForm.value['disc']);
    }else{
      alert("Please fill all the feilds")
    }
    console.log(this.image);
    this.router.navigate(['dashboard'])
  }

  }


