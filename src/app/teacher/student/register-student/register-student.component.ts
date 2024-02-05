import { Component, HostListener } from '@angular/core';
import { RootService } from '../../../root.service';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { TeacherService } from '../../teacher.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrl: './register-student.component.css'
})
export class RegisterStudentComponent {
  school_id: number;

  grades: string[] =[];

  register_result: number = 0;

  student: Student = {
    schoolId: 0,
    gradeId: 0,
    name: '',
    l_name: '',
    birth_date: null,
    email: '',
    status: 'locked'
  }


  constructor(private rootService: RootService, private studentService: StudentService, private teacherService: TeacherService){
    this.school_id = this.rootService.schoolId;
    // this.grades = this.classService.grades;
  }


/*
  The method bellow is responsible for creating or registering
  new student by calling the studentsevice.
  -----------------------------------------------------------------
*/
  register(){
    this.register_result = 0;
    this.student.schoolId = this.school_id;
    this.student.gradeId = this.teacherService.gradeId;
    this.studentService.register_student(this.student).subscribe({
      next: (response:any) => {
        this.register_result = response.status
      },
      error: error => {
        this.register_result = error.status
      }})
  }
  /*
  -----------------------------------------------------------------
*/



/*
  The code bellow is responsible only for creating and handling
  the drop down menu.
  -----------------------------------------------------------------
*/
  
  // isDropdownOpen = false;
  // selectedGrade: string = '';

  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent) {
  //   const targetElement = event.target as HTMLElement;
  //   if (!targetElement.closest('.dropdown')) {
  //     this.isDropdownOpen = false;
  //   }
  // }

  // toggleDropdown() {
  //   this.isDropdownOpen = !this.isDropdownOpen;
  // }

  // setGrade(grade: string){
  //   this.selectedGrade = grade;
  //   this.student.grade = grade;
  // }

/*
  -----------------------------------------------------------------
*/
}

