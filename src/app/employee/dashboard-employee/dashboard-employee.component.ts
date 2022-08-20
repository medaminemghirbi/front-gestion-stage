import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeePanelService } from 'src/app/services/employee-panel.service';

@Component({
  selector: 'app-dashboard-employee',
  templateUrl: './dashboard-employee.component.html',
  styleUrls: ['./dashboard-employee.component.css']
})
export class DashboardEmployeeComponent implements OnInit {
  employeedata:any
  messageErr =''
  counter:any
  dataArray:any = [] ;
  datemployee:any = [] ;
  constructor(private usersService:EmployeePanelService,private route:Router) { 
    this.employeedata = JSON.parse( sessionStorage.getItem('employeedata') !) ;
    console.log(this.employeedata )
  }

  ngOnInit(): void {
    this.usersService.getemployeedemandes(this.employeedata.id).subscribe(data=>{
      this.dataArray=data,
      this.counter = this.dataArray.length, (err:HttpErrorResponse)=>{
      this.messageErr="We dont't found this user in our database"} 
    }) 
    this.usersService.getlogeedemployee().subscribe(data=>{
      this.datemployee=data,
      console.log(this.datemployee), (err:HttpErrorResponse)=>{
      this.messageErr="We dont't found this user in our database"} 
    }) 
  }

}
