import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginInterceptorService } from './login/login-interceptor.service';
import { LoginService } from './login/login.service';
import { RootService } from './root.service';
import { CheckSchoolComponent } from './registeration/check-school/check-school.component';
import { CheckTeacherComponent } from './registeration/check-teacher/check-teacher.component';
import { RegisterSchoolComponent } from './registeration/check-school/register-school/register-school.component';
import { ErrorComponent } from './error/error.component';
import { RegisterTeacherComponent } from './registeration/check-teacher/register-teacher/register-teacher.component';


@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    CheckSchoolComponent,
    CheckTeacherComponent,
    RegisterSchoolComponent,
    RegisterTeacherComponent,
    ErrorComponent,
    
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [RootService, LoginService, {provide: HTTP_INTERCEPTORS, useClass: LoginInterceptorService, multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule { }
