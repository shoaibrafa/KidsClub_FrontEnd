import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../login/login.service';
import { RootService } from '../../root.service';

@Component({
  selector: 'app-t-topbar',
  templateUrl: './t-topbar.component.html',
  styleUrl: './t-topbar.component.css'
})
export class TTopbarComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private service: LoginService, public rootService: RootService){}

  ngOnInit(): void {

  }

  new_student(): void {
    this.router.navigate(['/app-teacher/teacher/student/new-student'])
  }
}
