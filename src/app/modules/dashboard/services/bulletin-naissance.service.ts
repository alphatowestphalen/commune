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
  saveBulletin(sender: any, options: any) {
    return this.http.post(this.baseURl, sender.data, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }
}
