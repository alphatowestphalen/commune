import { BulletinNaissanceService } from './../../../dashboard/services/bulletin-naissance.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  finalize,
  switchMap,
  tap,
} from 'rxjs';
import { DemandeService } from '../../services/demande.service';
import { PremiereCopieService } from 'src/app/modules/dashboard/services/premiere-copie.service';

@Component({
  selector: 'app-scoped-a',
  templateUrl: './scoped-a.component.html',
  styleUrls: ['./scoped-a.component.scss'],
})
export class ScopedAComponent implements OnInit {
  bulletin: any;
  panelOpenState = false;
  demande: any = [];
  serach:string;
  CopieSelected: any = '';
  //  errorMsg: string;
  isLoading = false;
  errorMsg!: string;
  premierecopie: any;
  Opendemande: boolean = false;
  nombre: number = 0;

  constructor(
    private router: Router,
    private demandeservice: DemandeService,
    private bulletinService: BulletinNaissanceService,
    private premiercopieservice: PremiereCopieService,
    private formbuilder: FormBuilder,
  ) {}

  Demandefilter = this.formbuilder.group({
    idPremierCopie: [''],
    typeDemande : ['']
  })

  ngOnInit(): void {
    this.getallCertificates();
  }
  nextDialog(nombre: any) {
    console.log(nombre);
    this.Opendemande = !this.Opendemande;
  }

  exitDialog() {
    this.nombre = 0;
    this.Opendemande = false;
  }

  getallCertificates() {
    this.demandeservice.getAllCertificates().subscribe((data) => {
      this.demande = data.data;
      console.log('data', this.demande);
    });
  }

  Birthcertif(id: string) {
   this.router.navigate(['/dashboard/premiere-copie-voir', id]);
  //  this.Demandefilter.value.idPremierCopie = id;
  //  this.Demandefilter.value.typeDemande = 'ACTE_DE_NAISSANCE'
  //  this.panelOpenState = !this.panelOpenState;
  //  this.demandeservice.addDemandeCertificates(this.Demandefilter.value)?.subscribe(()=>{
  //  //this.panelOpenState = !this.panelOpenState;
  //   })
  }

  Weddingcertif(id: string) {
    this.router.navigate(['/dashboard/premiere-copie-voir', id]);
  }

  Deadcertif(id: string) {}
  NaissanceCertif(id: number) {
    console.log(id)
    this.premiercopieservice.getCertificateByID(id).subscribe((data) => {
      this.bulletin = data;
      this.Opendemande = !this.Opendemande;
      this.bulletin.nomPersonne = data!.enfant.nomEnfant
      this.bulletin.prenomsPersonne = data!.enfant.prenomsEnfant
      this.bulletin.dateNaissPersonne = data!.enfant.datenaissEnfant
      this.bulletin.lieuNaissPersonne = data!.enfant.lieunaissEnfant
      this.bulletin.nomPere = data!.pere.nomPere
      this.bulletin.prenomsPere = data!.pere.prenomsPere
      this.bulletin.nomMere = data!.mere.nomMere
      this.bulletin.prenomsMere = data!.mere.prenomsMere
      this.bulletin.idPremierCopie = data!.idPremierCopie
      this.bulletin.createdDate = data!.createdDate
      console.log(data);
    }
    ////this.bulletinService.getBulletinByActeId(id)
    );
  }
  // Search() {
  //   if (this.CopieSelected == ' ') {
  //     return this.getallCertificates();
  //   } else {
  //     if (this.containsOnlyNumbers(this.CopieSelected) == true) {
  //       console.log(this.CopieSelected);
  //       this.demandeservice
  //         .SearchCertificateByIdPremierCopie(this.CopieSelected)
  //         .subscribe((data) => {
  //           this.demande = data.premierCopies;
  //           console.log(data);
  //         });
  //     } else {
  //       console.log(this.CopieSelected);
  //       this.demandeservice
  //         .SearchCertificateByNomEnfant(this.CopieSelected, this.CopieSelected)
  //         .subscribe((data) => {
  //           this.demande = data.premierCopies;
  //           console.log(data);
  //         });
  //     }
  //   }
  // }
  Search(){
    if (this.serach == ' ') {
        return this.getallCertificates();
    }else{
      this.demandeservice.SearchCertificate(this.serach).subscribe((data)=>{
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        this.demande = data.data;
      })
    }
  }
  containsOnlyNumbers(str: string) {
    // console.log(str)
    return /^(\d+-)*(\d+)$/.test(str);
  }
}
