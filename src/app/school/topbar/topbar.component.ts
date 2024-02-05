import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../login/login.service';
import { RootService } from '../../root.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private service: LoginService, public rootService: RootService){}

  ngOnInit(): void {

  }

  new_grade(): void {
    this.router.navigate(['/app-school/school/grade/new-grade'])
  }

  new_teacher(): void {
    this.router.navigate(['/app-school/school/teacher/new-teacher'])
  }

  register_teacher(): void {
    this.router.navigate(['/main/teacher/register_teacher'])
  }

  logout(){
    this.service.logout();
  }
}
