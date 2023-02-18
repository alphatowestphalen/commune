import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PremiereCopieService } from 'src/app/modules/dashboard/services/premiere-copie.service';

@Component({
  selector: 'app-adoption-add',
  templateUrl: './adoption-add.component.html',
  styleUrls: ['./adoption-add.component.scss']
})
export class AdoptionAddComponent implements OnInit {
  adoption: any;
  certificate: any;
  keyword = "ProjectTitle"

  constructor(private _formBuilder: FormBuilder, private premierecopie: PremiereCopieService,) { }

  PiecesFormGroup = this._formBuilder.group({});
  EnfantFormGroup = this._formBuilder.group({
    nomEnfant: [''],
    prenomsEnfant: '',
    datenaissEnfant: [''],
    lieunaissEnfant: [''],
    heurenaissEnfant: [''],
    dateEnfant: [''],
    idPremiereCopie: ['']
  });
  AdoptionFormGroup = this._formBuilder.group({
   infoChangement: [''],
   numChangement: [''],
  });


  ngOnInit(): void {
    this.getAllFirstCertificate();
  }

  getAllFirstCertificate(){
    this.premierecopie.getFirstCertificates()
    .subscribe(data=>{
     this.adoption = data.premierCopies
     console.log(this.adoption)
    })
  }

  onChange(event: any){

    this.premierecopie.getCertificateByID(event)
    .subscribe(data=>{
      this.certificate = data;
     console.log(this.certificate)
    })
     } 
}
