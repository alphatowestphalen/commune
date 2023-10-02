import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
enum typeDemandeur {
  externe = 'EXTERNE',
  interne = 'INTERNE',
}
@Injectable({
  providedIn: 'root',
})
export class BulletinNaissanceService {
  private baseURl: string = environment.baseUrl + '/bulletinNaissances';
  constructor(private readonly http: HttpClient) {}


  addBuletinNessanace(bulletinNaissances: Object ): Observable<any>{
    return this.http.post(`${this.baseURl}`, bulletinNaissances);
  }

  getAllBulletin(size: number, page: number): Observable<any> {
    return this.http.get(`${this.baseURl}?page=${page}&size=${size}`);
  }

  getBulletinByActeId(idPremierCopie: string): Observable<any> {
    return this.http.get(`${this.baseURl}/${idPremierCopie}`);
  }

  getBulletinById(id: string):Observable<any>{
    return this.http.get(`${this.baseURl}/${id}`);
  }
}
