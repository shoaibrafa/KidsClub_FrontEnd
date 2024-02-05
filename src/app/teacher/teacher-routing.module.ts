import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { DashboardComponent } from '../school/dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { StudentsComponent } from './student/students/students.component';
import { RegisterStudentComponent } from './student/register-student/register-student.component';

const routes: Routes = [
  { path: 'teacher', component: TeacherComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'student', component: StudentComponent, children: [
      { path: 'students', component: StudentsComponent },
      { path: 'new-student', component: RegisterStudentComponent}
    ]}
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
