import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Subject, take } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
// import { LoginResponseData } from './login.response';
import { SchoolLogin } from './school-login.model';
import { TeacherLogin } from '../teacher/teacher.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private service: LoginService){}

  credentials = {
    email: '',
    password: ''
  }

  login_error = false;


  onLogin(): void {
    this.login_error = false;
    this.service.login(this.credentials).subscribe({
      next: (response: any) => {
        if(response.status === 200){
          console.log(response.body)
          const res = response.body;

          if(res.role === '[ROLE_SCHOOL]'){
            const loginData = new SchoolLogin(res.school_id,res.email,res.schoolName,res.token,res.expiration_date, res.role);
            this.service.user.next(loginData)
            localStorage.setItem('loginData', JSON.stringify(loginData))
            this.router.navigate(['/app-school/school/dashboard'])
          } else if (res.role === '[ROLE_TEACHER]'){

            const loginData = new TeacherLogin(res.school_id,res.email,res.schoolName,res.token,res.expiration_date, res.role, res.grade_id, res.teacher_name, res.teacher_lname, res.current_grade, res.start_date, res.end_date);
            this.service.user.next(loginData)
            localStorage.setItem('loginData', JSON.stringify(loginData))
            this.router.navigate(['/app-teacher/teacher'])
          }
          
        }
      }, error: (error: HttpErrorResponse) =>{
        this.login_error = true;
      } 
    });
  }
}



