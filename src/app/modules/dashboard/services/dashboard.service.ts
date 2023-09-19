import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
private url = environment.baseUrl;
constructor(private http: HttpClient) { }

getAllStatus(): Observable<any> {
  return this.http.get(`${this.url}` + '/statistiques');
}

}
