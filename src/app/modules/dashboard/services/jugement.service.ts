import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JugementService {
  getCertificateAndJugementByID(id: any) {
    throw new Error('Method not implemented.');
  }
  private baseURl = environment.baseUrl+'/jugements';
  private baseURL2 = environment.baseUrl+'/premierCopies';

  constructor( private http: HttpClient) { }

  getJugements(size: number, page: number ): Observable<any> {
    return this.http.get(`${this.baseURl}?page=${page}&size=${size}`);
  }
  getSearchJugements(size: number, page: number, query:string ): Observable<any> {
    return this.http.get(`${this.baseURl}?page=${page}&size=${size}&q=${query}`);
  }
  getAlljugement():Observable<any>{
    return this.http.get(`${this.baseURl}`)
  }
  getAllPremierCopieNotIn(size: number, page: number ): Observable<any> {
    return this.http.get(`${this.baseURl}/premierCopies?page=${page}&size=${size}&haveJugement=false`);
  }
  addJugement(jugement:any): Observable<any> {
    return this.http.post(`${this.baseURl}/`, jugement)
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

  getAllPremierCopies():Observable<any>{
    return this.http.get(`${this.baseURL2}`)
  } 
}
