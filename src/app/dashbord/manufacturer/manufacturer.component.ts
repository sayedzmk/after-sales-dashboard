import { ManuficturerService } from './../../services/manuficturer/manuficturer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.scss']
})
export class ManufacturerComponent implements OnInit {

  image: any;
  imageb64: any;

  manifacturerForm : FormGroup;

  constructor(
    private _sanitizer: DomSanitizer,
    private formBuilder : FormBuilder,
    private manuficService :ManuficturerService
  ) { 
    this.manifacturerForm = this.formBuilder.group(
      {
        name: new FormControl('',{validators : [Validators.required,Validators.minLength(1)]}),
        address:['',[Validators.required,Validators.minLength(1)]],
        logo:['',[Validators.required,Validators.minLength(1)]],
        disc:['',[Validators.required,Validators.minLength(1)]]

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
      this.manuficService.addManuficturer(this.manifacturerForm.value['name'],this.manifacturerForm.value['address'],this.imageb64,this.manifacturerForm.value['disc']);
    }else{
      alert("Please fill all the feilds")
    }
    console.log(this.image);
  }

}
