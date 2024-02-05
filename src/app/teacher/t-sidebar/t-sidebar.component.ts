import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-t-sidebar',
  templateUrl: './t-sidebar.component.html',
  styleUrl: './t-sidebar.component.css'
})
export class TSidebarComponent implements OnInit{

  teacher_full_name: string = '';
  grade: string = '';
  startDate: string = '';
  endDate: string = '';


  constructor(private service: TeacherService){}

  ngOnInit(): void {
    this.teacher_full_name = this.service.teacherFullName;
    this.grade = this.service.grade;
    this.startDate = this.service.startDate;
    this.endDate = this.service.endDate;
  }


}
