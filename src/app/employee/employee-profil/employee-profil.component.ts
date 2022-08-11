import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeePanelService } from 'src/app/services/employee-panel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-profil',
  templateUrl: './employee-profil.component.html',
  styleUrls: ['./employee-profil.component.css']
})
export class EmployeeProfilComponent implements OnInit {
  employeedata:any;
  upadate!: any;
  messageSuccess: any;
  image: any;
  imageupdate!: any;
  constructor(private route:Router, private adminservice:EmployeePanelService) 
  {
    this.employeedata = JSON.parse( sessionStorage.getItem('employeedata') !) ;
    this.imageupdate = new FormGroup({ avatar: new FormControl('', [Validators.required]), });
    this.upadate = new FormGroup({
       firstname: new FormControl('', [Validators.required]),
       lastname: new FormControl('', [Validators.required]),
       email: new FormControl('', [Validators.required]),
       adress: new FormControl('', [Validators.required]),
       password: new FormControl('', [Validators.required]),

     });
 
   }
   
   updateadminprofil (f:any){
    let data=f.value
    const formData = new FormData();
    formData.append('firstname', this.upadate.value.firstname);
    formData.append('lastname', this.upadate.value.lastname);
    formData.append('email', this.upadate.value.email);
    formData.append('adress', this.upadate.value.adress);
    formData.append('password', this.upadate.value.password);

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
    this.adminservice.updateadminprofil(this.employeedata.id,formData).subscribe(response=>
      {
        
        sessionStorage.setItem( 'employeedata', JSON.stringify( response ) );
        window.location.reload();
        let indexId=this.employeedata.findIndex((obj:any)=>obj.id==this.employeedata.id)

        this.employeedata[indexId].email=data.email
        this.employeedata[indexId].firstname=data.firstname
        this.employeedata[indexId].lastname=data.lastname
        this.employeedata[indexId].adress=data.adress
        this.employeedata[indexId].password=data.password

        this.messageSuccess=`this email : ${this.employeedata[indexId].email} is updated`

      },(err:HttpErrorResponse)=>{
      })
     this.route.navigate(['/dashboard-employee']);
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }





  fileChange(event:any) {
    this.image =event.target.files[0];   
  }
  updateimage(f:any){
    let data=f.value
    const imageformadata = new FormData();
    imageformadata.append('avatar', this.image );
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log(data)
        
        this.adminservice.updateadminimage(this.employeedata.id,imageformadata).subscribe(response=>
          {
            
            
            sessionStorage.setItem( 'employeedata', JSON.stringify( response ) );
            window.location.reload();
         
    
          },(err:HttpErrorResponse)=>{
          
          })
    //   this.route.navigate(['/dashbord-freelancer']);
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    
  } 

















  ngOnInit(): void {
  }

}
