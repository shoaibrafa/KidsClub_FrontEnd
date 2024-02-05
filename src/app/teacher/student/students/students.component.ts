import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../../../login/login.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students: Student[] = []

  constructor(private studentService: StudentService, private loginService: LoginService){
    this.fetchStudents();
  }

  fetchStudents(): void {
    this.studentService.fetchStudents().subscribe({
      next: (response) =>{
        response.forEach(student => {
          this.students.push(student)
      });
    }, error: (error: HttpErrorResponse) => {
      if(error.status == 401){
        this.loginService.loadLogin();
      }
    }});
  }
}
