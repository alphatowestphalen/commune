import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BulletinNaicensse } from 'src/app/model/bulletin/Buletin.interface';

@Injectable({
  providedIn: 'root'
})
export class BulletinService {
  private _url = environment.baseUrl;

  constructor(private _http: HttpClient ) { }

  public saveBulletin(buletin: BulletinNaicensse){
    return this._http.post<BulletinNaicensse>(this._url + '/bulletinNaissances', buletin);
  }
}
