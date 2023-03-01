import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BulletinNaissanceService {
  constructor(private readonly http: HttpClient) {}
  private baseURl: string = environment.baseUrl + '/bulletinNaissances';
  async saveBulletin(sender: any, options: any): Promise<Observable<any>> {
    options.showDataSaving();
    return this.http.post(this.baseURl, sender.data, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }
}
