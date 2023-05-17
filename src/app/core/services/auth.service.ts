import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
   private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

 
  login(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`,user);
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, user);
  }


  logout()  {
    const options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
      })
    };
    return this.http.post(`${this.baseUrl}/logout`,options)
  }

}
