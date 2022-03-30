import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { customHttpResponse } from 'src/app/services/shared-data';
import { Router } from '@angular/router';
import { LocalStorage } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  categoryList: any[] = [];
  dataReady = false;
  constructor(private cateService: CategoriesService,
    private router:Router,
    private locastorge:LocalStorage) { }

  async ngOnInit(): Promise<void> {
    let response: customHttpResponse = await this.cateService.getCategory(0, 100,2);
    if (response.hasError == false) {
      this.categoryList = response.body;
      this.dataReady = true;
    }
    console.log(this.categoryList);
  }
  onEdit( data:any){
    this.locastorge.save('categ',data);
    this.router.navigate(['categ-edit']);
    
  }

}


