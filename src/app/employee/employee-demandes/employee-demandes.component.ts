import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { AdminPanelService } from 'src/app/services/admin-panel.service';
import { EmployeePanelService } from 'src/app/services/employee-panel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-demandes',
  templateUrl: './employee-demandes.component.html',
  styleUrls: ['./employee-demandes.component.css']
})
export class EmployeeDemandesComponent implements OnInit {
  adddemande: any ;
  getdataa: any ;
  employeedata:any;
  messageErr:any;
  dataArray:any = []
  isShown: boolean = false ;
  dataArrayy:any = []
  date: any ;
  submitted: boolean = false ; 
  messageError:any
  datareason={
    id : '',
    status:'',
    start_date:'',
    end_date:'',
    reason:'',
    refus_reason:'',

  }
  constructor(private usersService:EmployeePanelService,private route:Router ,private activatedRoute: ActivatedRoute) {
    this.employeedata = JSON.parse( sessionStorage.getItem('employeedata') !);
    console.log(this.employeedata.firstname)  
    this.getdataa = new FormGroup({
      status: new FormControl('', [Validators.required]),
      start_date: new FormControl('', [Validators.required]),
      end_date: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required]),
      refus_reason: new FormControl('', [Validators.required]),

    });

    this.adddemande = new FormGroup({
      start_date: new FormControl('', [Validators.required]),
      end_date: new FormControl('', [Validators.required]),
      motif_id: new FormControl('', [Validators.required]),
      user_id: new FormControl('', [Validators.required]),

    });
   }

  ngOnInit(): void {
    this.usersService.getdemandebyemployee(this.employeedata.id).subscribe(
      (response:any)=>{
      console.log(response)
      
      this.dataArrayy = response 
      
      if(this.dataArray.refus_reason!== undefined||this.dataArray.refus_reason!==null ||this.dataArray.refus_reason.length!==0 ){
        this.isShown = ! this.isShown;
        
      }else{
        this.isShown =false;
      }
      console.log(this.dataArrayy)
      sessionStorage.setItem( 'status', JSON.stringify( response.status ) )
      , (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this demande in our database"} 
      //console.log(this.dataArray)
    }) ;
    this.usersService.getallreasons().subscribe(data=>{
      
      console.log(data)   
      
      this.dataArray=data,
      (err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this category in our database"}
    }) 
  }
  getdata(status:string,start_date:string,end_date:string,reason:string,refus_reason:string,id:any){

    this.datareason.status= status 
    this.datareason.start_date= start_date 
    this.datareason.end_date= end_date 
    this.datareason.reason= reason 
    this.datareason.refus_reason =refus_reason
    debugger
    console.log(this.datareason)
  }

  delete(id:any  , i :number){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.deletedemande(id).subscribe(response=>{
          this.dataArray.splice(i,1)
          window.location.reload()
        })
        Swal.fire('Saved!', '', 'success')

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })  
  }







  addnewdemande (f:any){
  const formData = new FormData();
    formData.append('start_date', this.adddemande.value.start_date);
    formData.append('end_date', this.adddemande.value.end_date);
    
    formData.append('user_id', this.employeedata.id);
    formData.append('motif_id', this.adddemande.value.motif_id);   

  let data=f.value   
  
  console.log(formData)
  this.usersService.addnewdemande(formData).subscribe( ()=>{

    this.route.navigate(['/employee-demandes'])   ;

      this.submitted = true ;  
      Swal.fire({
        icon: 'success',
        title: 'success...',
        text: 'Saved !' ,
     
          showConfirmButton: true,
          timer: 1500
      })  
      window.location.reload();
  },(err:HttpErrorResponse)=>{

     Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'champs required or not valid !' ,
      position: 'top-end',
        showConfirmButton: false,
        timer: 1500
    })    
  }) ;  
}
}
