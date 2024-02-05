import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SchoolLogin } from '../../login/school-login.model';
import { RootService } from '../../root.service';
import { Grade } from './grade.model';
import { Teacher } from '../teacher/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  grades: string[] = [];


  access_token: string ='';

  constructor(private http: HttpClient, private rootService: RootService) { }


  fetchClasses(): Observable<Grade[]> {
    let user: SchoolLogin | null = null;
    const data = localStorage.getItem('loginData')
    if(data !== null){
      user = JSON.parse(data)
    }
    return this.http.get<Grade[]>(this.rootService.host + '/school/grade/' + user?.school_id).pipe(
      tap(g => {
        this.grades = g.map(g => g.grade)
      })
    )
  }

// fetchTeacherByName(){
//   let user: User | null = null;
//   const data = localStorage.getItem('loginData')
//   if(data !== null){
//     user = JSON.parse(data)
//   }
//   return this.http.get<Teacher[]>(this.rootService.host + '/school/grade/' + user?.school_id).pipe(
//     tap(g => {
//       this.grades = g.map(g => g.grade)
//     })
//   )
// }

  createGrade(data: Grade): Observable<HttpResponse<Grade>> {
    this.grades.push(data.grade.toString())
    return this.http.post<Grade>(this.rootService.host + '/school/grade/register', data, {observe: 'response'})
  }
}
