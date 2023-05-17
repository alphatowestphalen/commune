import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private readonly http: HttpClient) {}
  private baseURl: string = environment.modulesUrl + '/form/';

  getFormByTitle(title: string) {
    return this.http.get(this.baseURl + title);
  }
  // saveForm(data) {}
}
