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
}
