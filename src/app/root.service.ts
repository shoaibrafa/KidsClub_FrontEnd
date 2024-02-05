import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolLogin } from './login/school-login.model';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  host: string = 'http://10.0.0.128:8081/kc'
  temp_school_id: number = 0;
  school_name: string = '';
  school_email: string = '';
  security_key: string = '';


  currentComponent: string = '';


  constructor(private router: Router) { 
  }

  get schoolId(): number {
    const data = localStorage.getItem("loginData");
    if (data !== null) {
      const user: SchoolLogin = JSON.parse(data);
      return user.school_id;
    } else {
      return 0; // Or any other default value if loginData is not available
    }
  }


  get schoolName(): string {
    const data = localStorage.getItem("loginData");
    if (data !== null) {
      const schoolLogin: SchoolLogin = JSON.parse(data);
      return schoolLogin.name;
    } else {
      return ''; // Or any other default value if loginData is not available
    }
  }

  private _role: string = '';

  get userRole(): string {
    return this._role;
  }

  set userRole(role: string){
    this._role = role;
  }
}
