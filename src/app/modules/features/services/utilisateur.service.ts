import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

    
private baseURl = environment.baseUrl+'/users'
private Url = environment.baseUrl

constructor(private http: HttpClient) { }

getAllUsers(size: number, page: number):Observable<any>{
    return this.http.get(`${this.baseURl}?page=${page}&size=${size}`)
}

// historiqueUser(){
//     return this.http.get(`${this.Url}/historiques`)
// }

}