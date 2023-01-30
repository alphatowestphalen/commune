import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PremiereCopieService {


  private baseUrl = "https://mocki.io/v1/616bc212-68eb-448f-9fe7-86be30b0b1cb";

  constructor(private http: HttpClient) { }


  getFirstCertificates(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
