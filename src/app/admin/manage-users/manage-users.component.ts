import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AdminPanelService } from 'src/app/services/admin-panel.service';
import Swal from 'sweetalert2';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
  image:any;
  messageSuccess=''
  addemployee! :  FormGroup;
  user : User ={
    email:'',
    password:'',
    role:''
  }
  searchedKeyword!:string;
  submitted:any
  dataemp={
    id : '',
    firstname:'',
    lastname:'',
    email:'',
    adress:'',
    password:'',
    avatar:'' ,
  }
  updateemployee! :  FormGroup;
  constructor(private usersService:AdminPanelService,private route:Router ,private activatedRoute: ActivatedRoute  ) {
    this.addemployee = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    });
    this.updateemployee = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
      avatar: new FormControl(''),
    });
  }
  fileChange(event:any) {
    this.image =event.target.files[0];
    
  }
  
  ngOnInit(): void {
    this.usersService.getAllusers().subscribe(data=>{
      this.dataArray=data
      console.log(this.dataArray)
      this.counter = this.dataArray.length , (err:HttpErrorResponse)=>{
      this.messageErr="We dont't found this user in our database"} 
    }) 

  }
  getdata(email:string,firstname:string,lastname:string,adress:string,password:string,image_url:string,id:any){
    this.messageSuccess=''
    this.dataemp.email= email 
    this.dataemp.firstname= firstname 
    this.dataemp.lastname= lastname 
    this.dataemp.adress= adress 
    this.dataemp.password =password
    this.dataemp.avatar =image_url 
    this.dataemp.id= id 
    console.log(this.dataemp)
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
  
  updateempbloyee(f:any){
    let dataempe=f.value
    const formData = new FormData();
    formData.append('avatar', this.image );
    formData.append('firstname', this.updateemployee.value.firstname);
    formData.append('lastname', this.updateemployee.value.lastname);
    formData.append('adress', this.updateemployee.value.adress);
    formData.append('email', this.updateemployee.value.email);
    formData.append('password', this.updateemployee.value.password);
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        debugger
        console.log(dataempe)
        this.usersService.updateemployee(this.dataemp.id,formData).subscribe(response=>
          {
          this.submitted = true ;
            let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.dataemp.id)
    
            //this.dataArray[indexId].id=data.id
            this.dataArray[indexId].firstname=dataempe.firstname
            this.dataArray[indexId].lastname=dataempe.lastname
            this.dataArray[indexId].adress=dataempe.adress
            this.dataArray[indexId].email=dataempe.email
            this.dataArray[indexId].password=dataempe.password
            this.dataArray[indexId].avatar=dataempe.avatar
            this.messageSuccess=`this Employee : ${this.dataArray[indexId].email} is updated`
            window.location.reload();
           this.route.navigate(['/manage-users']);
          
          },(err:HttpErrorResponse)=>{
          
          })
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })


}

  
 

}