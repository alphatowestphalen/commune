import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})

export class TokenService {
  payload:any;

  constructor() {
    this.decodeJWT()
  }

  handleData(token: any) {
    localStorage.setItem('access_token', token);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
  removeToken() {
    localStorage.removeItem('access_token');
  }
  decodeJWT() {
    const token = this.getToken() || null; // Assign the result to token with a fallback to null
    if (token) {
      const jwtservice = new JwtHelperService();
      this.payload = jwtservice.decodeToken(token);
      return this.payload;
    }
  }
  isMaire(){
    return this.hasRole("maire")
  }
  hasRole(role:string){
    return this.payload.roles.toLowerCase().includes(role.toLowerCase())
  }
}
