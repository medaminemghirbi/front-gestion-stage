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
  deletedemande(id:any) {
    return this.http.delete(environment.urlBackend+'demandes/' + id )
  }
  getdemandebyemployee (user_id : any) {
    return this.http.get(`${environment.urlBackend}`+'getdemandebyemployee/' + user_id )
  }

  getemployeedemandes(user_id:any){
    return this.http.get(`${environment.urlBackend}`+'get_count_of_demandes_by_employee/' + user_id )
  }
  //**send email reset +reset password section  */
  sendresetlink (email:any)  {
    return this.http.post(environment.urlBackend+'password_resets/',email) ;
  }
  resetpassword(token:string,email:any){
    return this.http.put(environment.urlBackend+'password_resets/'+token,email);
  }

}
