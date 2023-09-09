import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PremiereCopieService {


  private baseUrl = environment.baseUrl+'/premierCopies';

  constructor(private http: HttpClient) { }


  getCertificates(size: number, page: number ): Observable<any> {
    return this.http.get(`${this.baseUrl}?page=${page}&size=${size}`);
  }

  getFirstCertificates( ): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
  


  addFirstCertificates(premiereCopie: Object):Observable<Object> {
    return this.http.post(`${this.baseUrl}`,premiereCopie);
  }

  getCertificateByID(idPremierCopie: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/${idPremierCopie}`)
  }

  updateCertificate(id:number, premierCopie: Object): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, premierCopie)
  }

  deleteCertificate(id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

 
  getLastIdCerticate():Observable<any>{
    return this.http.get(`${this.baseUrl}/LastPremiereCopie`);
  }



}
