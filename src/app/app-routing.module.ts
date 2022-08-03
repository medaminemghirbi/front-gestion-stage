import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfilComponent } from './admin/admin-profil/admin-profil.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EmployeeRequestsComponent } from './admin/employee-requests/employee-requests.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'dashboard-RH',component:DashboardComponent},
  {path:'manage-users',component:ManageUsersComponent},
  {path:'employee-requests',component:EmployeeRequestsComponent},
  {path:'admin-profil',component:AdminProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
