import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MaireService  {
    private baseUrl = environment.baseUrl+'/maires';

    constructor(private http: HttpClient){}


    getAllMaire(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }

}