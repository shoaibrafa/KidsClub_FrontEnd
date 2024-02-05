import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RootService } from '../../../root.service';
import { TeacherService } from '../../../school/teacher/teacher.service';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrl: './register-teacher.component.css'
})
export class RegisterTeacherComponent implements OnInit{
  teacher_data = {
    email: '',
    password: '',
    security_key: ''
  }

  confirm_password: string = '';

  form_not_filled: boolean = true;
  registration_result: string = ''
  register_successful = false;
  register_error = false;

  constructor(private router: Router, private http: HttpClient, private service: TeacherService, private rootService: RootService){}

  ngOnInit(): void {
    this.teacher_data.email = this.service.teacher_email;
    this.teacher_data.security_key = this.service.teacher_security_key;
  }


  onRegister() {

    if(this.teacher_data.email == '' || this.teacher_data.security_key == '' || this.teacher_data.password == ''){
      this.form_not_filled = false;
      return
    }else if (this.confirm_password != this.teacher_data.password){
      return
    }else{
        this.http.post(this.rootService.host + '/school/teacher/activate/reset_password', this.teacher_data, { observe: 'response' }).subscribe({
          next: (response: any) => {
            if (response.status === 200) {
              this.registration_result = 'Activation successful!';
              this.register_successful = true;
              this.register_error = false;
            } else {
              this.registration_result = 'Error! could not activate account';
              this.register_successful = false;
              this.register_error = true;
            }
          },
          error: (error: HttpErrorResponse) => {
            this.registration_result = 'Internal Error! Try again later';
            this.register_successful = false;
            this.register_error = true;
          }
        });
    }
  }
}
