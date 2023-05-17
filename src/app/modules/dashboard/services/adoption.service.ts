import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {

private baseURl = environment.baseUrl+'/adoptions'

  constructor(private http: HttpClient) { }

  getAdoptions(size: number, page: number ): Observable<any> {
    return this.http.get(`${this.baseURl}?page=${page}&size=${size}`);
  }

  getAllAdoption(): Observable<any>{
    return this.http.get(`${this.baseURl}`)
  }

  addAdoption(id:number, adoption: Object ): Observable<Object>{
    return this.http.post(`${this.baseURl}/${id}`, adoption);
  }

  updateAdoption(id:number, adoption:Object):Observable<any>{
    return this.http.put(`${this.baseURl}/${id}`, adoption)
  }

  deleteAdoption(id:number):Observable<any>{
    return this.http.delete(`${this.baseURl}/${id}`)
  }

  getAdoptionById(id: number): Observable<any>{
    return this.http.get(`${this.baseURl}/${id}`)
  }
}
