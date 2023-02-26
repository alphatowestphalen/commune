import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JugementService {
  private baseURl = environment.baseUrl+'/jugements';

  constructor( private http: HttpClient) { }

  getAlljugement():Observable<any>{
    return this.http.get(`${this.baseURl}`)
    
  }

  addJugement(jugement:any, id: number): Observable<any> {
    return this.http.post(`${this.baseURl}/${id}`, jugement)
  }

  updateJugement(jugement: any, id: number): Observable<any>{
    return this.http.put(`${this.baseURl}/${id}`, jugement)
  }

  deleteJugement(id: number): Observable<any> {
    return this.http.delete(`${this.baseURl}/${id}`)
  }

  getJugementById(id:number):Observable<any>{
    return this.http.get(`${this.baseURl}/${id}`)
  }
}
