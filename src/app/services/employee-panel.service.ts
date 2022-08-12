import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeePanelService {

  constructor(private http : HttpClient , public router: Router) { }
  updateadminprofil(id:string,newprofile:any){
    return this.http.patch(environment.urlBackend+'updateadmin/' + id , newprofile )
  }
  updateadminimage (id:string,newprofile:any){
    return this.http.patch(environment.urlBackend+'updateadminimage/' + id , newprofile )
  }
  getallreasons(){
    return this.http.get(`${environment.urlBackend}`+'motifs/')
  }
  addnewdemande (data:any) {
    return this.http.post(environment.urlBackend+'demandes/',data) ;
  }
  getdemandebyemployee (user_id : any) {
    return this.http.get(`${environment.urlBackend}`+'getdemandebyemployee/' + user_id )
  }
}
