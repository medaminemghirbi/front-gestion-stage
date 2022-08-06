import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public connecte : boolean = false ; 
  logged_in : boolean = false ; 
  constructor(private http : HttpClient , public router: Router) { }
 
  login(data:any): Observable<any> {
    this.logged_in = true ;
    this.connecte = true;
    
    return this.http.post(environment.urlBackend + 'sessions/', data);
  }

  logout(){
    this.connecte = false;
    sessionStorage.clear();
    return this.http.delete(environment.urlBackend+'logout/') ;
  }
  getcurrentuser(){
    return this.http.get(environment.urlBackend + 'logged_in/')
  }

}
