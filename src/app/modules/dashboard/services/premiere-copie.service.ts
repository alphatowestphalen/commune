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


  getFirstCertificates(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  addFirstCertificates(premiereCopie: Object):Observable<Object> {
    return this.http.post(`${this.baseUrl}`,premiereCopie);
  }

  getCertificateByID(idPremierCopie: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${idPremierCopie}`)
  }

  updateCertificate(id:number, premierCopie: Object){
    return this.http.put(`${this.baseUrl}/${id}`, premierCopie)
  }

  deleteCertificate(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }


}
