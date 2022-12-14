import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmployeePanelService } from '../services/employee-panel.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  logo:any = "./assets/lg.png";
  resetemaillink! :  FormGroup;
  messageSuccess = '' ;
  messageErr =''
  constructor(private usersService:EmployeePanelService,private route:Router) {
    this.resetemaillink = new FormGroup({
      email: new FormControl('', [Validators.required])

    });
   }

  ngOnInit(): void {
  }
  sendresetlinkk (f:any)
  {

    const formData = new FormData();
    formData.append('email', this.resetemaillink.value.email);
    let data=f.value
     
    this.usersService.sendresetlink(formData).subscribe( ()=>{
      
    
     // console.log(formData)
     
      Swal.fire('Reset Link Sent Avec Succes! check your Email', '', 'success')


  },(err:HttpErrorResponse)=>{
    this.messageErr=err.error
    console.log(err.error)
     console.log(err.status)
     
  }) ;
  }
}