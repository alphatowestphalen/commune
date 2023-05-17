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
   
  }

  getAllCertificates():Observable<any>{
    return this.http.get(`${this.baseUrl}`)
  }

   SearchCertificateByNomEnfant(nomEnfant: any, PrenomsEnfant: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/nomEnfant?NomEnfant=${nomEnfant}&PrenomsEnfant=${PrenomsEnfant}`)
 
  }

  getAllHistoriques(): Observable<any>{
    return this.http.get(`${this.baseUrl}/historiques`)
  }
}
