import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { LoginService } from '../../../login/login.service';
import { RootService } from '../../../root.service';
import { GradeService } from '../grade.service';
import { Grade } from '../grade.model';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css'
})
export class GradesComponent implements OnInit{

  grades: Grade[] = [];

  constructor(private service: GradeService, private loginService: LoginService, private rootService: RootService){}

  ngOnInit(): void {
    this.fetchGrades();
    this.rootService.currentComponent = 'GRADE';
  }


  fetchGrades(): void {
    this.service.fetchClasses().subscribe({
      next: (response) =>{
        response.forEach(grade => {
          this.grades.push(grade)
      });
    }, error: (error: HttpErrorResponse)  =>{
      if(error.status == 401){
        this.loginService.loadLogin();
      }
    }});
  }

  /*
  The code bellow is responsible only for creating and handling
  the drop down menu.
  -----------------------------------------------------------------
*/
  
isDropdownOpen = false;
selectedGrade: string = '';

@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent) {
  const targetElement = event.target as HTMLElement;
  if (!targetElement.closest('.dropdown')) {
    this.isDropdownOpen = false;
  }
}

toggleDropdown() {
  this.isDropdownOpen = !this.isDropdownOpen;
}

setGradeww(grade: string){
  this.selectedGrade = grade;
}

/*
-----------------------------------------------------------------
*/
}
