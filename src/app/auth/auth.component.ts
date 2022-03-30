import { LocalStorage } from './../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  formGroup!: FormGroup;
  userdata:string="userdata";
  

  constructor(private authserver: AuthService ,
    private router: Router,
    private localstore:LocalStorage) { }

  ngOnInit(): void {
   let userData = this.localstore.retrive(this.userdata);
   if (userData !==null){
    this.router.navigate(['dashboard']);
   }

    this.inForm();
  }
  inForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  async signin() {
    if (this.formGroup.valid) {
      let response = await this.authserver.login(this.formGroup.value['email'],this.formGroup.value['password']);
      console.log(response);
      this.localstore.save(this.userdata,response);
      this.router.navigate(['dashboard']);
      
      // .subscribe(resData => {
      //   if (resData.success) {
      //     console.log(resData);
      //     alert(resData.message)
      //   }
      //   else{
      //     console.log(resData)

      //   }


      // })
    }
  }

}


