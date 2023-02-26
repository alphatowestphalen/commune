import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReconnaissanceService {

private baseURl = environment.baseUrl+'/reconnaissances'

  constructor(private http: HttpClient) { }

  getAllReconnaissance(): Observable<any>{
    return this.http.get(`${this.baseURl}`)
  }

  addReconnaissance(id:number, Reconnaissance: Object ): Observable<Object>{
    return this.http.post(`${this.baseURl}/${id}`, Reconnaissance);
  }

  updateReconnaissance(id:number, Reconnaissance:Object):Observable<any>{
    return this.http.put(`${this.baseURl}/${id}`, Reconnaissance)
  }

  deleteReconnaissance(id:number):Observable<any>{
    return this.http.delete(`${this.baseURl}/${id}`)
  }

  getReconnaissanceById(id: number): Observable<any>{
    return this.http.get(`${this.baseURl}/${id}`)
  }
}
