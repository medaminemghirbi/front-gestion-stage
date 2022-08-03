import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public connecte : boolean = false ;

  messageError:any

  registerForm =  new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })

  user : User ={
    email:'',
    password:'',
  }

  constructor(private Auth:AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  login(){

    const data = {
      user :{
        email:this.user.email,
        password:this.user.password,
      }


    };
    debugger
    this.Auth.login(data).subscribe(
      response => {
        console.log(response);
        if(response.status==401){
     
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'User Not Found Or invalide Credentialns'
          })
        }else{


       if(response.user.email_confirmed==true) {
        if(response.logged_in ==true && response.user.role =="admin"  ){ 
          sessionStorage.setItem( 'admindata', JSON.stringify( response.user ) );
          sessionStorage.setItem( 'logged_in', JSON.stringify( response.logged_in ) );
          console.log(response);
          this.route.navigate(['/dashboard-RH']);
        }
        else if(response.logged_in ==true && response.user.role =="employee")
        {
          sessionStorage.setItem( 'employeedata', JSON.stringify( response.user ) );
          sessionStorage.setItem( 'logged_in', JSON.stringify( response.logged_in ) );
          this.route.navigate(['/dashboard-employee']);
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email or Password is Incorrect!'
          })
        }
       }else{
     
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'account created but not confirmed!, check Your EMail'
          })
        }
       
      }
     
      },(err:HttpErrorResponse)=>this.messageError=err.error.error);
      
  }

  
}