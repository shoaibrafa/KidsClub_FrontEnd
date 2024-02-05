import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SchoolComponent } from './school/school.component';
import { CheckSchoolComponent } from './registeration/check-school/check-school.component';
import { ErrorComponent } from './error/error.component';
import { RegisterSchoolComponent } from './registeration/check-school/register-school/register-school.component';
import { CheckTeacherComponent } from './registeration/check-teacher/check-teacher.component';
import { RegisterTeacherComponent } from './registeration/check-teacher/register-teacher/register-teacher.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'check-school', component: CheckSchoolComponent },
    { path: 'check-teacher', component: CheckTeacherComponent },
    { path: 'app-school', loadChildren: () => import('./school/school.module').then(m => m.SchoolModule) },
    { path: 'app-teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
    { path: 'register-school', component: RegisterSchoolComponent },
    { path: 'register-teacher', component: RegisterTeacherComponent },
    { path: 'error', component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule { }