import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RootService } from '../../../root.service';

@Component({
  selector: 'app-register-school',
  templateUrl: './register-school.component.html',
  styleUrl: './register-school.component.css'
})
export class RegisterSchoolComponent implements OnInit{
  schoolRegData = {
    id: 0,
    name: '',
    email: '',
    password: '',
    security_key: ''
  }

  confirm_password: string = '';

  form_not_filled: boolean = true;
  registration_result: string = ''
  register_successful = false;
  register_error = false;

  constructor(private http: HttpClient, private rootService: RootService){}

  ngOnInit(): void {
    this.schoolRegData.id = this.rootService.temp_school_id;
    this.schoolRegData.name = this.rootService.school_name;
    this.schoolRegData.email = this.rootService.school_email;
    this.schoolRegData.security_key = this.rootService.security_key;
  }


  onRegister() {

    if(this.schoolRegData.id == 0 || this.schoolRegData.name == '' || this.schoolRegData.email == '' || this.schoolRegData.security_key == '' || this.schoolRegData.password == ''){
      this.form_not_filled = false;
      return
    }else if (this.confirm_password != this.schoolRegData.password){
      return
    }else{
        this.http.post(this.rootService.host + '/school/register', this.schoolRegData, { observe: 'response' }).subscribe({
          next: (response: any) => {
            console.log(response.status)
            if (response.status === 200) {
              this.registration_result = 'Registration successful!';
              this.register_successful = true;
              this.register_error = false;
            } else {
              this.registration_result = 'Error! School or Email may already exist.';
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
