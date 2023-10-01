
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DecesService {
  
  private baseURl = environment.baseUrl+'/deces'
  

  constructor(private http: HttpClient) { }

  getAllDeces(): Observable<any> {
    return this.http.get(`${this.baseURl}`);
  }

  // addDeces(id:number, deces: Object ): Observable<Object>{
  //   return this.http.post(`${this.baseURl}/${id}`, deces);
  // }

  addDeces(data: any): Observable<any> {
    return this.http.post(`${this.baseURl}`, data)
  }

  updateDeces(id:number, deces:Object):Observable<any>{
    return this.http.put(`${this.baseURl}/${id}`, deces)
  }

  deleteDeces(id:number):Observable<any>{
    return this.http.delete(`${this.baseURl}/${id}`)
  }

  getDecesById(id: number): Observable<any>{
    return this.http.get(`${this.baseURl}/${id}`)
  }


}
