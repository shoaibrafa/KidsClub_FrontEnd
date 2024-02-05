import { Component } from '@angular/core';
import { RootService } from '../../../root.service';
import { TeacherService } from '../teacher.service';
import { Teacher } from '../teacher.model';

@Component({
  selector: 'app-new-teacher',
  templateUrl: './new-teacher.component.html',
  styleUrl: './new-teacher.component.css'
})
export class NewTeacherComponent {
  school_id: number;
  register_result: number = 0;


  teacher: Teacher = {
    schoolId: 0,
    name: '',
    l_name: '',
    current_grade: '',
    email: '',
    phone: '',
    status:''
  }

  constructor(private rootService: RootService, private service: TeacherService){
    this.school_id = this.rootService.schoolId;

  }


  register(){
    this.register_result = 0
    this.teacher.schoolId = this.school_id;
    this.service.register_teacher(this.teacher).subscribe({next:(response: any)=>{
      this.register_result = response.status
    }, 
    error:(error)=>{
      this.register_result = error.status
    }})
  }

}
