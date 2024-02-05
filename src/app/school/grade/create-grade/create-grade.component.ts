import { Component, HostListener, OnInit } from '@angular/core';
import { LoginService } from '../../../login/login.service';
import { RootService } from '../../../root.service';
import { Grade } from '../grade.model';
import { GradeService } from '../grade.service';
import { TeacherService } from '../../teacher/teacher.service';
import { Teacher } from '../../teacher/teacher.model';

@Component({
  selector: 'app-create-grade',
  templateUrl: './create-grade.component.html',
  styleUrl: './create-grade.component.css'
})
export class CreateGradeComponent implements OnInit{
  gradeCreationStatus: number = 0;
  teachers: string[] =[];

  school_id: number = this.rootService.schoolId;

  grade: Grade = {
    schoolId: 0,
    grade: '',
    startDate: null,
    endDate: null,
    teacher_email: '',
    teacher_name: '',
    teacher_lastname: '',
  }

  teacher_names: string[][] = []

  constructor(private loginService: LoginService,
    private classService: GradeService, 
    private rootService: RootService,
    private teacherService: TeacherService){
  }

  ngOnInit(): void {
    this.rootService.currentComponent = 'GRADE'
    this.getTeacherByName();
  }


  create(){
    this.grade.schoolId = this.rootService.schoolId;
    this.classService.createGrade(this.grade).subscribe({
      next: (response:any) =>{
      if(response.status === 201){
          this.gradeCreationStatus = 201;
      }
    }, error: () => {
      this.gradeCreationStatus = 409;
    }})
  }

  getTeacherByName(): void{
    this.teacherService.get_teachers().subscribe({
      next: (response)=> {
        response.forEach((teacher: Teacher) =>{
          this.teacher_names.push([teacher.name + ' ' + teacher.l_name, teacher.email])
        })
      }, error: (error)=> {
        console.log(error)
      }})
  }


  /*
  The code bellow is responsible only for creating and handling
  the drop down menu.
  -----------------------------------------------------------------
*/
  
isDropdownOpen = false;
selectedTeacher: string = '';

@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent) {
  const targetElement = event.target as HTMLElement;
  if (!targetElement.closest('.dropdown')) {
    this.isDropdownOpen = false;
  }
}

toggleDropdown() {
  this.isDropdownOpen = !this.isDropdownOpen;
}

setTeacher(teacher_name: string, teacher_email: string){
  this.selectedTeacher = teacher_name;
  this.grade.teacher_email = teacher_email;
}
}
