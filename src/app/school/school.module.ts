import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolComponent } from './school.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherComponent } from './teacher/teacher.component';
import { RouterModule } from '@angular/router';
import { GradeComponent } from './grade/grade.component';
import { GradesComponent } from './grade/grades/grades.component';
import { CreateGradeComponent } from './grade/create-grade/create-grade.component';
import { HeaderModule } from '../header/header.module';
import { TopbarComponent } from './topbar/topbar.component';
import { FormsModule, NgForm } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeachersComponent } from './teacher/teachers/teachers.component';
import { NewTeacherComponent } from './teacher/new-teacher/new-teacher.component';




@NgModule({
  declarations: [
    SchoolComponent,
    SidebarComponent,
    DashboardComponent,
    TeacherComponent,
    TeachersComponent,
    NewTeacherComponent,
    GradeComponent,
    GradesComponent,
    CreateGradeComponent,
    TopbarComponent,
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    RouterModule,
    HeaderModule,
    FormsModule
  ]
})
export class SchoolModule { }
