import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootService } from '../../root.service';
import { Teacher } from './teacher.model';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teacher_email: string = '';
  teacher_security_key: string = '';
  teachers: Teacher[] = []

  constructor(private http: HttpClient, private service: RootService) { }

  register_teacher(teacher: Teacher): Observable<HttpResponse<Teacher>> {
    return this.http.post<Teacher>(this.service.host + '/school/teacher/register', teacher, {observe: 'response'})
  }


  get_teachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.service.host + '/school/teacher/get_all/' + this.service.schoolId)
  }

  check_teacher(key: string, email: string): Observable<any> {
    const data = {key, email}
    return this.http.post<any>(this.service.host + '/school/teacher/activate/check', data, { observe: 'response'})
  }
}
