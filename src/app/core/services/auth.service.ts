import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient, private token: TokenService, public router: Router) { }

  login(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`,user);
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, user);
  }

  logout():void{
      this.token.removeToken();
      this.router.navigate(['sign-in']);
    }
}
