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
import { EmployeeRequestsComponent } from './employee/employee-requests/employee-requests.component';
import { AdminProfilComponent } from './admin/admin-profil/admin-profil.component';
import { DashboardEmployeeComponent } from './employee/dashboard-employee/dashboard-employee.component';
import { EmployeeDemandesComponent } from './employee/employee-demandes/employee-demandes.component';
import { EmployeeHeaderComponent } from './employee/employee-header/employee-header.component';
import { EmployeeSidebarComponent } from './employee/employee-sidebar/employee-sidebar.component';
import { EmployeeProfilComponent } from './employee/employee-profil/employee-profil.component';
import { ManageReasonsComponent } from './admin/manage-reasons/manage-reasons.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashboardComponent,
    SideBarComponent,
    AdminHeaderComponent,
    ManageUsersComponent,
    EmployeeRequestsComponent,
    AdminProfilComponent,
    DashboardEmployeeComponent,
    EmployeeDemandesComponent,
    EmployeeHeaderComponent,
    EmployeeSidebarComponent,
    EmployeeProfilComponent,
    ManageReasonsComponent,
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
 