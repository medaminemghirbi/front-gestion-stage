import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminPanelService } from 'src/app/services/admin-panel.service';

@Component({
  selector: 'app-employee-requests',
  templateUrl: './employee-requests.component.html',
  styleUrls: ['./employee-requests.component.css']
})
export class EmployeeRequestsComponent implements OnInit {
  messageErr="" ;
  dataArray:any = []
  constructor(private usersService:AdminPanelService,private route:Router) { }

  ngOnInit(): void {
    this.usersService.getalldemandes().subscribe(data=>{
      // debugger
      
      this.dataArray=data 
      console.log(this.dataArray), 
      (err:HttpErrorResponse)=>{
      this.messageErr="We dont't found this reason in our database"} 
      })

}
}
