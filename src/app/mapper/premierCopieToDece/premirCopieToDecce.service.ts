import { Injectable } from '@angular/core';
import { DeceeInterface } from 'src/app/model/decee/decee.interface';
import { PremiereCopie } from 'src/app/modules/dashboard/models/premiere-copie';

@Injectable({
  providedIn: 'root'
})
export class PremirCopieToDecceService {

constructor() { }

  premierCopieToDecce(data: any, dece:DeceeInterface){
    console.log(data);
    
  }
}
