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

  constructor(private readonly http: HttpClient) {}

  private baseURl: string = environment.baseUrl + '/bulletinNaissances';

  saveBulletin(sender: any, options: any) {
    const type = typeDemandeur.externe;
    const createdDate = new Date();

    return this.http.post(
      this.baseURl,
      { type, createdDate, ...sender.data },
      {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }
    );
  }

  getAllBulletin():Observable<any>{
    return  this.http.get(`${this.baseURl}`)
  }

  

}
