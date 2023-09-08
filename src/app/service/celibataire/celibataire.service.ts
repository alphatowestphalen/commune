import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActeCelibataire } from 'src/app/model/acteCelibataire/ActeCelibataire.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CelibataireService {
  private url = environment.baseUrl;

  constructor(private readonly _http:HttpClient) { }

  getAllCellibataire(size: number, page: number):Observable<any> {
    return this._http.get<any>(this.url + '/acteCelibataires?page='+page+'&size='+size);
  }
}
