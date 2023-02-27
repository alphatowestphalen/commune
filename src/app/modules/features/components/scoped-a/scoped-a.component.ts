import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, finalize, switchMap, tap } from 'rxjs';
import { DemandeService } from '../../services/demande.service';

@Component({
  selector: 'app-scoped-a',
  templateUrl: './scoped-a.component.html',
  styleUrls: ['./scoped-a.component.scss']
})
export class ScopedAComponent implements OnInit {
  
  panelOpenState = false;
  demande: any = [];
  demandefilter:any =[];
  searchDemande = new FormControl();
  CopieSelected: any = "";
//  errorMsg: string;
  isLoading = false;
  errorMsg!: string;
  premierecopie: any;

  constructor(private demandeservice: DemandeService) { }

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

  getallCertificates(){
  this.demandeservice.getAllCertificates()
  .subscribe(data=>{
    this.demande = data.premierCopies;
    console.log("data", this.demande)
  })
 }

 Birthcertif(id: string){
  console.log(id);

 }

 Weddingcertif(id:string){
alert(id);
 }

 Deadcertif(id: string){

 }

 Search(){
 if(this.containsOnlyNumbers(this.CopieSelected) == true ){
  console.log(this.CopieSelected)
  this.demandeservice.SearchCertificateByIdPremierCopie(this.CopieSelected)
  .subscribe(data=>{
    this.demande = data.premierCopies;
    console.log(data);
  })

 } 
 else{
  console.log(this.CopieSelected)


  this.demandeservice.SearchCertificateByNomEnfant(this.CopieSelected, this.CopieSelected)
  .subscribe(data=>{
    this.demande = data.premierCopies;
    console.log(data);
  })

 }

 }

  containsOnlyNumbers(str: string) {
   // console.log(str)
  return /^(\d+-)*(\d+)$/.test(str);
}

}
