import { LocalStorage } from './../services/local-storage.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faStream } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faSign } from '@fortawesome/free-solid-svg-icons';
import {  faIndustry  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  faBars=faBars;
  faTimes=faTimes;
  faQrcode=faQrcode;
  faLink=faLink;
  faStream=faStream;
  faQuestionCircle=faQuestionCircle;
  faSlidersH=faSlidersH;
  faEnvelope=faEnvelope;
  faCalendarWeek=faCalendarWeek;
  faUser=faUser;
  faCaretLeft=faCaretLeft;
  faSign=faSign;
  faIndustry=faIndustry;
  
  opened=true;
  userdata:string="userdata";
  selectedTab ='';
  
 select(event:string){
   this.selectedTab=this.selectedTab == event ? "" : event;
 }


  constructor(private router : Router ,
    private localStorage:LocalStorage) { }

  ngOnInit(): void {
  }

  navTo(route:string){
    this.router.navigateByUrl(route);
  }
  onClear(){
    this.localStorage.delete(this.userdata);
    this.router.navigate(['auth'])
  }

}
