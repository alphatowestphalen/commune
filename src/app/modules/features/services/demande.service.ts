import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PremiereCopieService } from '../../dashboard/services/premiere-copie.service';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  private baseUrl = environment.baseUrl+'/premierCopies';

  constructor( private http:HttpClient) { }

  

  SearchCertificateByIdPremierCopie(idPremierCopie: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/?idPremierCopie=${idPremierCopie}`)
   // http://localhost:8080/api/premierCopies/?idPremierCopie=2023&page=0&size=3
  }


  getAllCertificates():Observable<any>{
    return this.http.get(`${this.baseUrl}`)
  }

}
