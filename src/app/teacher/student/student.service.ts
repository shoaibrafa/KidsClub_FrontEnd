import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { RootService } from '../../root.service';
import { Student } from './student.model';
import { TeacherLogin } from '../teacher.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // arts: ArtDto[] = [];

  constructor(private http: HttpClient, private rootService: RootService) { }

  register_student(data: Student): Observable<HttpResponse<Student>> {
    return this.http.post<Student>(this.rootService.host + '/teacher/student/register', data, {observe: 'response'})
  }

  clearArts(){
    // this.arts = [];
  }

  fetchStudents(): Observable<Student[]> {
    let teacher: TeacherLogin | null = null;
    const data = localStorage.getItem('loginData')
    if(data !== null){
      teacher = JSON.parse(data)
    }
    
    return this.http.get<Student[]>(this.rootService.host + '/teacher/student/all/' + this.rootService.schoolId + "/" + teacher?.grade_id)
  }




  loadImageForArt(id: number, type: string, student_email: string): Observable<string> {
    const params = new HttpParams()
    .set('image_type', type)
    .set('student_email', student_email);
    const imageUrl = this.rootService.host + '/teacher/student/art/' + id;

    return this.http.get(imageUrl, {params, responseType: 'blob' }).pipe(
      switchMap(response => {
        const reader = new FileReader();
        return new Observable<string>((observer) => {
          reader.onloadend = () => {
            const thumbnail: string = reader.result as string;
            observer.next(thumbnail); 
            observer.complete();
          };
          reader.readAsDataURL(response);
        });
      })
    );    
  }
}
