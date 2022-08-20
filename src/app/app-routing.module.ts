import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfilComponent } from './admin/admin-profil/admin-profil.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EmployeeRequestsComponent } from './admin/employee-requests/employee-requests.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { DashboardEmployeeComponent } from './employee/dashboard-employee/dashboard-employee.component';
import { EmployeeDemandesComponent } from './employee/employee-demandes/employee-demandes.component';
import { IndexComponent } from './index/index.component';
import { GuardGuard } from './services/guard.guard';
import { EmployeeProfilComponent } from './employee/employee-profil/employee-profil.component';
import { ManageReasonsComponent } from './admin/manage-reasons/manage-reasons.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'dashboard-RH', canActivate:[GuardGuard], component:DashboardComponent},
  {path:'manage-users',canActivate:[GuardGuard], component:ManageUsersComponent},
  {path:'employee-requests',canActivate:[GuardGuard], component:EmployeeRequestsComponent},
  {path:'admin-profil',canActivate:[GuardGuard], component:AdminProfilComponent},
  {path:'manage-reasons',canActivate:[GuardGuard],component:ManageReasonsComponent},
  {path:'employee-profil',canActivate:[GuardGuard],component:EmployeeProfilComponent},
  {path:'dashboard-employee',canActivate:[GuardGuard],component:DashboardEmployeeComponent},
  {path:'employee-demandes',canActivate:[GuardGuard],component:EmployeeDemandesComponent},
  {path:'reset/:token', component: ResetPasswordComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
