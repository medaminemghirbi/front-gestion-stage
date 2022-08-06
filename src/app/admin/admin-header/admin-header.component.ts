import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  searchedKeyword!:string;
  

  messageErr:any;
  admindata:any;
  constructor(private route:Router, private servicesService:AuthService) {
  this.admindata = JSON.parse( sessionStorage.getItem('admindata') !);

}
  ngOnInit(): void {
  
  }
  logout(){
  
    this.servicesService.logout();
    this.route.navigate(['']);
   
  }
}