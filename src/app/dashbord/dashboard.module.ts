import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashRoutingModule } from './dash-routing.module';
import { DashbordComponent } from './dashbord.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { CategoriedComponent } from './categoried/categoried.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { EditManufacturerComponent } from './edit-manufacturer/edit-manufacturer.component';
import { OrderListComponent } from './order-list/order-list.component';
import { EidtCategoriesComponent } from './eidt-categories/eidt-categories.component';


@NgModule({
    declarations: [
     DashbordComponent,
     ManufacturerComponent,
     CategoriedComponent,
     ListCategoryComponent,
     EditManufacturerComponent,
     OrderListComponent,
     EidtCategoriesComponent
    ],
    imports: [
    FontAwesomeModule,
    BrowserModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
     DashRoutingModule,
     FormsModule,
     ReactiveFormsModule
    ],
   
  })

  export class DashboardModule { }
