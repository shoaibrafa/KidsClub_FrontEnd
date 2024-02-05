import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RootService } from '../../root.service';

@Component({
  selector: 'app-check-school',
  templateUrl: './check-school.component.html',
  styleUrl: './check-school.component.css'
})
export class CheckSchoolComponent implements OnInit{

  constructor(private route: ActivatedRoute, private http: HttpClient, private service: RootService, private router: Router){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const key = params['key']
      this.check_key(key);
    });
  }

  check_key(key: string) {
    this.http.post<checkresponse>(this.service.host + '/school/check', key, {observe: 'response'}).subscribe({
      next: (response: any) =>{
        const response_body = response.body;
        if(response_body){
          this.service.temp_school_id = response_body.id;
          this.service.school_name = response_body.name;
          this.service.school_email = response_body.email;
          this.service.security_key = response_body.security_key;
          this.router.navigate(['/register-school']);
        }else{
          this.router.navigate(['/error']);
        }
      }, 
      error: (error: HttpErrorResponse) => {
        this.router.navigate(['/error']);
      }
    })
  }
}

interface checkresponse {
  id: number;
  name: string;
  email: string;
  security_key: string;
}