import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AdminPanelService } from 'src/app/services/admin-panel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  counter:any
  dataArray:any = [] ;
  p:number = 1 ;
  messageErr =''
  addemployee! :  FormGroup;
  user : User ={
    email:'',
    password:'',
    role:''
  }

  constructor(private usersService:AdminPanelService,private route:Router ,private activatedRoute: ActivatedRoute  ) {
    this.addemployee = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    });
  }
  
  ngOnInit(): void {
    this.usersService.getAllusers().subscribe(data=>{
      this.dataArray=data
      console.log(this.dataArray)
      this.counter = this.dataArray.length , (err:HttpErrorResponse)=>{
      this.messageErr="We dont't found this user in our database"} 
    }) 

  }
  addnewemployee (f:any){
    const data = {
      user :{
        email:this.user.email,
        password:this.user.password,
        role : this.user.role 
      }
    };
   this.usersService.addnewemployee(data).subscribe( 
    Response=>{
      console.log(Response)
      Swal.fire('Saved!', '', 'success')
      window.location.reload()
  
    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error      
    }) ;
  }


  deleteemployee(id:any  , i :number){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.deleteemployee(id).subscribe(response=>{
          this.dataArray.splice(i,1)
    
        })
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })  
  }
  


  
 

}