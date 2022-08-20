import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminPanelService } from 'src/app/services/admin-panel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-requests',
  templateUrl: './employee-requests.component.html',
  styleUrls: ['./employee-requests.component.css']
})
export class EmployeeRequestsComponent implements OnInit {
  messageErr="" ;
  dataArray:any = []
  update:any;
  p:number = 1 ;
  itemsPerPage = 10;
  datademande = {
    id : '' ,
    status  : '',
    refus_reason:''
  }
  messageSuccess = '' ;
  constructor(private usersService:AdminPanelService,private route:Router) { 
    this.update = new FormGroup({
      status: new FormControl(''),
      refus_reason: new FormControl(''),
    });
  }
  searchedKeyword!:string;

  ngOnInit(): void {
    this.usersService.getalldemandes().subscribe(data=>{
      // debugger
      
      this.dataArray=data 
      this.p =  0
      
      console.log(this.dataArray), 
      (err:HttpErrorResponse)=>{
      this.messageErr="We dont't found this reason in our database"} 
      })
      
}
getdata(status:string,refus_reason:string , id:any){
  this.datademande.id=id
  this.datademande.status=status
  this.datademande.refus_reason=refus_reason
  console.log(this.datademande)
}

updatedemande (f:any){

  let data=f.value
const formData = new FormData();
formData.append('status', this.update.value.status );
formData.append('refus_reason', this.update.value.refus_reason);
Swal.fire({
  title: 'Action Irreversible,Do you want to save the changes?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    debugger
    this.usersService.updatedemande(this.datademande.id,formData).subscribe(response=>
      {
       
        let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.datademande.id)

        //this.dataArray[indexId].id=data.id
        this.dataArray[indexId].status=data.status
        this.dataArray[indexId].refus_reason=data.refus_reason
        
        this.messageSuccess=`this demande : ${this.dataArray[indexId].status} is updated`
        
       this.route.navigate(['/postulated-missions-client']);
      
      },(err:HttpErrorResponse)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You cant update twice!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      
      })
    Swal.fire('Saved!', '', 'success')
  //  window.location.reload();
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})



  
}


}
