import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";
import { Observable, exhaustMap, take } from "rxjs";
import { SchoolLogin } from "./school-login.model";
import { Router } from "@angular/router";


@Injectable()
export class LoginInterceptorService implements HttpInterceptor {
    constructor(private router: Router){}
    token = '';


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.url.endsWith('/login') || req.url.endsWith('/kc/school/register')){
            return next.handle(req)
        }
        const data = localStorage.getItem("loginData")
        let category = '';
        if(data !== null){
            if(req.url.includes('/kc/teacher/')){
                category = 'TEACHER';

            }else if (req.url.includes('/kc/school/')){
                category = 'SCHOOL'
            }
            const user: any = JSON.parse(data)
            if(new Date(user._expiration_date) > new Date){
                this.token = 'Bearer ' + user._token;                
                req = req.clone({ setHeaders: { Authorization: this.token, category}});
            }else {
                this.router.navigateByUrl('');
                window.localStorage.clear();
            }
        } else {
            this.router.navigateByUrl('')
        }
        return next.handle(req);        
    }
}