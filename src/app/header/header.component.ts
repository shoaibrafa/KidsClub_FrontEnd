import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service';
import { RootService } from '../root.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  school_name: string = ''
  
  constructor(private service: LoginService, private rootService: RootService){}
  
  ngOnInit(): void {
    this.school_name = this.rootService.school_name;
    this.school_name = this.rootService.schoolName
  }

  logout(){
    this.service.logout();
  }
}
