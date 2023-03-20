import { BulletinNaissanceService } from './../../../dashboard/services/bulletin-naissance.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  finalize,
  switchMap,
  tap,
} from 'rxjs';
import { DemandeService } from '../../services/demande.service';

@Component({
  selector: 'app-scoped-a',
  templateUrl: './scoped-a.component.html',
  styleUrls: ['./scoped-a.component.scss'],
})
export class ScopedAComponent implements OnInit {
  bulletin: any;
  panelOpenState = false;
  demande: any = [];
  demandefilter: any = [];
  searchDemande = new FormControl();
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
    private bulletinService: BulletinNaissanceService
  ) {}

  ngOnInit(): void {
    this.getallCertificates();

    // this.searchDemande.valueChanges
    // .pipe(
    //   filter(res => {
    //     if(res == null){
    //       this.getallCertificates();
    //     }
    //     return res !== null
    //   }),
    //   switchMap(value => this.demandeservice.SearchCertificateByIdPremierCopie(value)
    //     .pipe(
    //       finalize(() => {
    //         this.isLoading = false
    //       }),
    //     )
    //   )
    // )
    // .subscribe((data: any) => {

    //   this.demande = data.premierCopies;
    //   console.log(data);
    // });
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
      this.demande = data.premierCopies;
      console.log('data', this.demande);
    });
  }

  Birthcertif(id: string) {
    this.router.navigate(['/dashboard/premiere-copie-voir', id]);
  }

  Weddingcertif(id: string) {
    this.router.navigate(['/dashboard/premiere-copie-voir', id]);
  }

  Deadcertif(id: string) {}
  NaissanceCertif(id: number) {
    this.bulletinService.getBulletinByActeId(id).subscribe((data) => {
      this.bulletin = data;
      this.Opendemande = !this.Opendemande;
    });
  }
  Search() {
    if (this.CopieSelected == ' ') {
      return this.getallCertificates();
    } else {
      if (this.containsOnlyNumbers(this.CopieSelected) == true) {
        console.log(this.CopieSelected);
        this.demandeservice
          .SearchCertificateByIdPremierCopie(this.CopieSelected)
          .subscribe((data) => {
            this.demande = data.premierCopies;
            console.log(data);
          });
      } else {
        console.log(this.CopieSelected);
        this.demandeservice
          .SearchCertificateByNomEnfant(this.CopieSelected, this.CopieSelected)
          .subscribe((data) => {
            this.demande = data.premierCopies;
            console.log(data);
          });
      }
    }
  }

  containsOnlyNumbers(str: string) {
    // console.log(str)
    return /^(\d+-)*(\d+)$/.test(str);
  }
}
