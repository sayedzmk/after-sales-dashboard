import { OrderListComponent } from './order-list/order-list.component';
import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { DashbordComponent } from "./dashbord.component";
import { FromsComponent } from "./froms/froms.component";
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ListManufacturersComponent } from './list-manufacturers/list-manufacturers.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { CategoriedComponent } from './categoried/categoried.component';
import { EditManufacturerComponent } from "./edit-manufacturer/edit-manufacturer.component";
import { EidtCategoriesComponent } from './eidt-categories/eidt-categories.component';

const routes: Routes = [
   {
       path: '',
       component:DashbordComponent,
       children :[
        { path: 'user', component: FromsComponent },
        {path : 'manf' ,component:ManufacturerComponent},
        {path : 'manf-list', component:ListManufacturersComponent},
        {path : 'catg' ,component:CategoriedComponent},
        { path:'catg-list',component:ListCategoryComponent},
        { path :'manf-edit',component:EditManufacturerComponent},
        { path :'categ-edit',component:EidtCategoriesComponent},
        { path: 'order', component:OrderListComponent}
        
        
       ]
   }
   ,{
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
   
  ];
@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export  class DashRoutingModule{}


