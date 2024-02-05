import { Component, OnInit } from '@angular/core';
import { RootService } from '../../../root.service';
import { Teacher } from '../teacher.model';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent implements OnInit{

  // teachers: Teacher[] = []

  constructor(public teacherService: TeacherService, private rootService: RootService){}

  ngOnInit(): void {
    this.rootService.currentComponent = 'TEACHER'
    this.getTeachers();
  }


  getTeachers(): void{
    this.teacherService.get_teachers().subscribe({
      next: (response)=> {
        this.teacherService.teachers = []
        response.forEach((teacher: Teacher) => {
        this.teacherService.teachers.push(teacher)
       })
      }, error: (error)=> {
        console.log(error)
      }})
  }
  

}
