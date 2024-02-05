import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService } from '../../school/teacher/teacher.service';

@Component({
  selector: 'app-check-teacher',
  templateUrl: './check-teacher.component.html',
  styleUrl: './check-teacher.component.css'
})
export class CheckTeacherComponent implements OnInit {


  constructor(private router: Router, private route: ActivatedRoute, private service: TeacherService){}

  ngOnInit(): void {

    const key = this.route.snapshot.queryParamMap.get('key')
    const email = this.route.snapshot.queryParamMap.get('email')

    if(key !== null && email !== null){
      this.service.check_teacher(key, email).subscribe({
        next: (response: any)=>{
          this.service.teacher_email = email;
          this.service.teacher_security_key = key;
          this.router.navigate(['/register-teacher'])
        }, error: (error)=>{
          this.router.navigate(['/error'])
        }})
    }
  }
}
