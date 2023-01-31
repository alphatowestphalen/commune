import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PremiereCopieService {


  private baseUrl = "http://localhost:3000/premiereCopie";

  constructor(private http: HttpClient) { }


  getFirstCertificates(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
