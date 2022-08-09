import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfilComponent } from './admin/admin-profil/admin-profil.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EmployeeRequestsComponent } from './admin/employee-requests/employee-requests.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { ContactWebmasterComponent } from './employee/contact-webmaster/contact-webmaster.component';
import { DashboardEmployeeComponent } from './employee/dashboard-employee/dashboard-employee.component';
import { EmployeeDemandesComponent } from './employee/employee-demandes/employee-demandes.component';
import { IndexComponent } from './index/index.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'dashboard-RH', canActivate:[GuardGuard], component:DashboardComponent},
  {path:'manage-users',canActivate:[GuardGuard], component:ManageUsersComponent},
  {path:'employee-requests',canActivate:[GuardGuard], component:EmployeeRequestsComponent},
  {path:'admin-profil',canActivate:[GuardGuard], component:AdminProfilComponent},
  {path:'dashboard-employee',component:DashboardEmployeeComponent},
  {path:'employee-demandes',component:EmployeeDemandesComponent},
  {path:'contact-webmaster',component:ContactWebmasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
