import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }

  get grade(): string {
    const data = localStorage.getItem("loginData")
    if(data !== null){
      const teacher: TeacherLogin = JSON.parse(data);
      return teacher.current_grade;
    }
    return '';
  }

  get gradeId(): number {
    const data = localStorage.getItem("loginData")
    if(data !== null){
      const teacher: TeacherLogin = JSON.parse(data);
      return teacher.grade_id;
    }
    return 0;
  }

  get startDate(): string {
    const data = localStorage.getItem("loginData")
    if(data !== null){
      const teacher: TeacherLogin = JSON.parse(data);
      return teacher.start_date;
    }
    return '';
  }


  get endDate(): string {
    const data = localStorage.getItem("loginData")
    if(data !== null){
      const teacher: TeacherLogin = JSON.parse(data);
      return teacher.end_date;
    }
    return '';
  }

  get teacherFullName(): string {
    const data = localStorage.getItem("loginData")
    if(data !== null){
      const teacher: TeacherLogin = JSON.parse(data);
      const full_name: string = teacher.teacher_name + ' ' + teacher.teacher_lname;
      return full_name;
    }
    return '';
  }

}

export class TeacherLogin{
  constructor(
      public school_id: number,
      public email: string,
      public name: string,
      public _token: string,
      public _expiration_date: Date,
      public role: string,
      public grade_id: number,
      public teacher_name: string,
      public teacher_lname: string,
      public current_grade: string,
      public start_date: string,
      public end_date: string,

  ){}

  // get token(){
  //     if(!this._expiration_date || new Date > this._expiration_date){
  //         return null;
  //     }
  //     return this._token;
  // }
}