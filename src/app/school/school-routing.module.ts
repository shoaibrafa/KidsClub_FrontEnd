import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolComponent } from './school.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GradeComponent } from './grade/grade.component';
import { combineLatest } from 'rxjs';
import { GradesComponent } from './grade/grades/grades.component';
import { CreateGradeComponent } from './grade/create-grade/create-grade.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeachersComponent } from './teacher/teachers/teachers.component';
import { NewTeacherComponent } from './teacher/new-teacher/new-teacher.component';


const routes: Routes = [
  { path: 'school', component: SchoolComponent, children: [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'grade', component: GradeComponent, children: [
      { path: 'grades', component: GradesComponent },
      { path: 'new-grade', component: CreateGradeComponent}
    ]},
    { path: 'teacher', component: TeacherComponent, children :[
      { path: 'teachers', component: TeachersComponent},
      { path: 'new-teacher', component: NewTeacherComponent}
    ]},
  ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
