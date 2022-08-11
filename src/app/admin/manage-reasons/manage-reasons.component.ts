import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminPanelService } from 'src/app/services/admin-panel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-reasons',
  templateUrl: './manage-reasons.component.html',
  styleUrls: ['./manage-reasons.component.css']
})
export class ManageReasonsComponent implements OnInit {
  counter:any
  addreason! :  FormGroup;
  messageErr="" ;
  image:any;
  submitted : boolean = false ;
  dataArray:any = []
  p:number = 1 ;
  messageSuccess = '' ;
  rason: string ="" ;
  searchedKeyword!:string;

  datareason={
    id : '',
    reason:''

  }

  update! :  FormGroup;


  constructor(private usersService:AdminPanelService,private route:Router) { 
    this.update = new FormGroup({
      reason: new FormControl(''),
    });
    this.addreason = new FormGroup({
      reason: new FormControl('', [Validators.required]),
 
    });
  }

  ngOnInit(): void {
    this.usersService.getallreasons().subscribe(data=>{
      // debugger
      
      this.dataArray=data 
      console.log(this.dataArray)
      this.counter = this.dataArray.length, (err:HttpErrorResponse)=>{
      this.messageErr="We dont't found this reason in our database"} 
    }) 
  }

  key = 'id' ;
  reverse: boolean = false ;

  sort(key: string) {
    this.key = key ;
    this.reverse = !this.reverse ;
  }
  details(id:any){
    this.route.navigate(['/manage-reasons/'+id])
  }

  delete(id:any  , i :number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.deletereason(id).subscribe(response=>{
          this.dataArray.splice(i,1)   
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

    
  }

  getdata(reason:string,id:any){
    console.log(this.datareason)
    this.datareason.reason= reason 
    this.datareason.id= id 

  }

  
  updatereason(f:any){
    let data=f.value
    const formData = new FormData();

    formData.append('reason', this.update.value.reason);
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.usersService.updatereason(this.datareason.id,formData).subscribe(response=>
          {
          this.submitted = true ;
            let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.datareason.id)
    
            //this.dataArray[indexId].id=data.id
            this.dataArray[indexId].reason=data.reason

            this.messageSuccess=`this reason : ${this.dataArray[indexId].reason} is updated`
            window.location.reload();
           this.route.navigate(['/manage-reasons']);
          
          },(err:HttpErrorResponse)=>{
          
          })
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })


}
addreasons (f:any){
  const formData = new FormData();

  formData.append('reason', this.addreason.value.reason);
  let data=f.value
  
  
  this.usersService.addreasons(formData).subscribe( ()=>{
      window.location.reload();
      Swal.fire('Saved!', '', 'success')
    this.route.navigate(['/manage-reasons'])

  },(err:HttpErrorResponse)=>{
    this.messageErr=err.error

     
  }) ;
}


}