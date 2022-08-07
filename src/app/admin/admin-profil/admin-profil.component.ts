import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminPanelService } from 'src/app/services/admin-panel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-profil',
  templateUrl: './admin-profil.component.html',
  styleUrls: ['./admin-profil.component.css']
})
export class AdminProfilComponent implements OnInit {
  admindata:any;
  upadate!: any;
  messageSuccess: any;
  image: any;
  imageupdate!: any;
  constructor(private route:Router, private adminservice:AdminPanelService) 
  {
    this.admindata = JSON.parse( sessionStorage.getItem('admindata') !) ;
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
    this.adminservice.updateadminprofil(this.admindata.id,formData).subscribe(response=>
      {
        
        sessionStorage.setItem( 'admindata', JSON.stringify( response ) );
        window.location.reload();
        let indexId=this.admindata.findIndex((obj:any)=>obj.id==this.admindata.id)

        this.admindata[indexId].email=data.email
        this.admindata[indexId].firstname=data.firstname
        this.admindata[indexId].lastname=data.lastname
        this.admindata[indexId].adress=data.adress
        this.admindata[indexId].password=data.password

        this.messageSuccess=`this email : ${this.admindata[indexId].email} is updated`

      },(err:HttpErrorResponse)=>{
      })
     this.route.navigate(['/dashboard-RH']);
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
        
        this.adminservice.updateadminimage(this.admindata.id,imageformadata).subscribe(response=>
          {
            
            
            sessionStorage.setItem( 'admindata', JSON.stringify( response ) );
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
