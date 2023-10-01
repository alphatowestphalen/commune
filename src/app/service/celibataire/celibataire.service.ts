import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActeCelibataire, ActeCelibataireInterne } from 'src/app/model/acteCelibataire/ActeCelibataire.interface';
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

  addCellibataires(acteCelibataire:ActeCelibataireInterne):Observable<any> {
    return this._http.post(this.url + '/acteCelibataires', acteCelibataire);
  }

  getAllCelibataireById(id: number): Observable<any> {
    return this._http.get(`${this.url}/acteCelibataires/${id}`)
  }

  Search(searchTerm: string): Observable<any> {
    return this._http.get(`${this.url}/acteCelibataires/?q${searchTerm}`);
  }
}
