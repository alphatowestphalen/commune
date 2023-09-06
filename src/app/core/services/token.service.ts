import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class TokenService {

  constructor() {}

  handleData(token: any) {
    localStorage.setItem('access_token', token);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
  removeToken() {
    localStorage.removeItem('access_token');
  }
}
