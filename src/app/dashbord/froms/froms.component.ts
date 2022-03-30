import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserProfile } from 'src/app/shared/user-profile.model';

@Component({
  selector: 'app-froms',
  templateUrl: './froms.component.html',
  styleUrls: ['./froms.component.scss']
})
export class FromsComponent implements OnInit {
image :any;
imageb64 : any;
userProfile:UserProfile[]=[
  new UserProfile('sayed','mohamed','sayed@mohamed','Araby','Eygpt','Giza')
];
  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
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
    console.log(this.image);
  }

}
