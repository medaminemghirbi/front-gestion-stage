import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminPanelService {
  constructor(private http : HttpClient , public router: Router) { }
  getAllusers(){
    return this.http.get(`${environment.urlBackend}`+'employees/')
  }
  deleteemployee(id:any){
    return this.http.delete(environment.urlBackend+'deleteemployee/' + id )
  }
  addnewemployee(data:any){
    return this.http.post<any>(environment.urlBackend + 'registrations/' , data)
  }

  updateemployee(id:string,newdata:any){
    return this.http.patch(environment.urlBackend+'updateemployeebyadmin/' + id , newdata )
  }
  updateadminprofil(id:string,newprofile:any){
    return this.http.patch(environment.urlBackend+'updateadmin/' + id , newprofile )
  }
  updateadminimage (id:string,newprofile:any){
    return this.http.patch(environment.urlBackend+'updateadminimage/' + id , newprofile )
  }

  countall(){
    return this.http.get<any>(`${environment.urlBackend}`+'countall/')
  }
    
   /////////////////////// motifs  */////////////////
   getallreasons(){
    return this.http.get(`${environment.urlBackend}`+'motifs/')
  }
  

  addreasons(data:any){
    return this.http.post(environment.urlBackend+'motifs/' , data) ;
  }

  deletereason(id:any){
    return this.http.delete(environment.urlBackend+'motifs/' + id )
  }

  updatereason(id:string,newdata:any){
    return this.http.patch(environment.urlBackend+'motifs/' + id , newdata )
  }
   /////////////////////// demandes  */////////////////
   getalldemandes(){
    return this.http.get(`${environment.urlBackend}`+'demandes/?p=${10}')
  }
  deletedemande(id:any) {
    return this.http.delete(environment.urlBackend+'demandes/' + id )
  }
  updatedemande (id:string,newdata:any) {
    return this.http.patch(environment.urlBackend+'demandes/' + id , newdata )
  }
  
}
