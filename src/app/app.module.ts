import { LocalStorage } from './services/local-storage.service';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxWebstorageModule,SessionStorageService} from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FromsComponent } from './dashbord/froms/froms.component';
import { DashRoutingModule } from './dashbord/dash-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { DashboardModule } from './dashbord/dashboard.module';
import { ListManufacturersComponent } from './dashbord/list-manufacturers/list-manufacturers.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FromsComponent,
    ListManufacturersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    DashboardModule,
    NgxWebstorageModule.forRoot()

    
  ],
  providers: [
    MatSidenavContent,
    SessionStorageService,
    LocalStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
