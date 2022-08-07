import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule, MDBBootstrapModule  } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SideBarComponent } from './admin/side-bar/side-bar.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { EmployeeRequestsComponent } from './admin/employee-requests/employee-requests.component';
import { AdminProfilComponent } from './admin/admin-profil/admin-profil.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashboardComponent,
    SideBarComponent,
    AdminHeaderComponent,
    ManageUsersComponent,
    EmployeeRequestsComponent,
    AdminProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 