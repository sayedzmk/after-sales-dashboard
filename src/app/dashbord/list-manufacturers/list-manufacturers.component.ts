import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'src/app/services/local-storage.service';
import { ManuficturerService } from 'src/app/services/manuficturer/manuficturer.service';
import { customHttpResponse } from 'src/app/services/shared-data';

@Component({
  selector: 'app-list-manufacturers',
  templateUrl: './list-manufacturers.component.html',
  styleUrls: ['./list-manufacturers.component.scss']
})
export class ListManufacturersComponent implements OnInit {
  manuficturersList :any[] = [];
  dataReady = false;

  constructor(private mService : ManuficturerService,
    private router:Router,
    private locastorge:LocalStorage) { }

  async ngOnInit(): Promise<void> {
    let response: customHttpResponse  = await this.mService.getManuficturer(0,100);
    if(response.hasError == false){
      this.manuficturersList = response.body;
      this.dataReady = true;
    }
    console.log(this.manuficturersList);
  }
  onEdit( data:any){
    this.locastorge.save('manfa',data);
    this.router.navigate(['manf-edit']);
    
  }

}
