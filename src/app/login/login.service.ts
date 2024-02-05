import { Injectable } from '@angular/core';
import { RootService } from '../root.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SchoolLogin } from './school-login.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user = new BehaviorSubject<SchoolLogin | null>(null);

  constructor(private http: HttpClient, private service: RootService, private router: Router ) { }

  login(credentials: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.service.host + '/school/login', credentials, {observe: 'response'})
  }

  logout(){
    this.http.get(this.service.host + '/school/logout').subscribe({next: (response)=>{
      this.loadLogin();
    }, 
    error: (error) => {
      this.loadLogin();
      console.log(error)
    }})
  }


  loadLogin(){
    this.router.navigateByUrl('')
    window.localStorage.clear()
  }

}


