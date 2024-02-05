import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { HeaderModule } from '../header/header.module';
import { TSidebarComponent } from './t-sidebar/t-sidebar.component';
import { TTopbarComponent } from './t-topbar/t-topbar.component';
import { StudentComponent } from './student/student.component';
import { StudentsComponent } from './student/students/students.component';
import { RegisterStudentComponent } from './student/register-student/register-student.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeacherComponent,
    TSidebarComponent,
    TTopbarComponent,
    StudentComponent,
    StudentsComponent,
    RegisterStudentComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    HeaderModule,
    FormsModule,
  ]
})
export class TeacherModule { }
