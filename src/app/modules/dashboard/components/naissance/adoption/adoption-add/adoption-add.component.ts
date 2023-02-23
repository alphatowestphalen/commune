import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PremiereCopieService } from 'src/app/modules/dashboard/services/premiere-copie.service';
import { debounceTime, tap, switchMap, finalize, distinctUntilChanged, filter } from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import "../../../../../../../assets/js/nombrelettre"
import { AdoptionService } from 'src/app/modules/dashboard/services/adoption.service';

declare function NombreEnLettre(params: number): any;
declare function MoisMalgache(params: string): any
@Component({
  selector: 'app-adoption-add',
  templateUrl: './adoption-add.component.html',
  styleUrls: ['./adoption-add.component.scss']
})
export class AdoptionAddComponent implements OnInit {
  adoption: any;
  certificate: any;

  searchMoviesCtrl = new FormControl();
  filteredMovies: any = [];
  isLoading = false;
  errorMsg!: string;
  minLengthTerm = 1;
  CopieSelected: any = "";
  data: any;

  datenaiss: string | null | undefined;
  datenaissMere: string | null | undefined;
  datenaissPere: string | null | undefined;
  datenaissDeclarant: string | null | undefined;
  dateregistre: string | null | undefined;



  constructor(private _formBuilder: FormBuilder, private premierecopie: PremiereCopieService, public dialog: MatDialog) { }

  PiecesFormGroup = this._formBuilder.group({});
  EnfantFormGroup = this._formBuilder.group({
    dateMere: '',
    datePere: [''],
    dateDeclarant: [''],
    dateEnfant: [''],
    dateregistre: ['']
  });
  AdoptionFormGroup = this._formBuilder.group({
    parentAdoptif: [''],
    dateAdoption: [''],
    heureAdoption: [''],
    numAdoption: [''],
    createdDate: new Date()
  });




  getAllFirstCertificate() {
    this.premierecopie.getFirstCertificates()
      .subscribe(data => {
        this.adoption = data
        console.log(this.adoption)
      })
  }

  onChange(event: any) {

    this.premierecopie.getCertificateByID(event)
      .subscribe(data => {
        this.certificate = data;
        console.log(this.certificate)
      })
  }


  onSelected() {
    console.log(this.CopieSelected);
    this.CopieSelected = this.CopieSelected;

  }

  displayWith(value: any) {
    return value?.idPremiereCopie;
  }

  clearSelection() {
    this.CopieSelected = "";
    this.filteredMovies = [];
  }

  ngOnInit() {
    this.searchMoviesCtrl.valueChanges
      .pipe(
        filter(res => {
          return res !== null && res.length >= this.minLengthTerm
        }),
        distinctUntilChanged(),
        debounceTime(1000),
        tap(() => {
          this.errorMsg = "";
          this.filteredMovies = [];
          this.isLoading = true;
        }),

        switchMap(value => this.premierecopie.getFirstCertificates()
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      )
      .subscribe((data: any) => {
        // if (data.premierCopies == undefined) {
        //   this.errorMsg = data['Error'];
        //   this.filteredMovies = [];
        // } else {
        //   this.errorMsg = "";

        // }
        this.filteredMovies = data;
        console.log(data);
      });
  }

  FirstStep() {


    const enfant: any = this.CopieSelected['enfant']['datenaissEnfant']?.split("-")
    const datenaiss = NombreEnLettre(enfant[2]).concat(' ', MoisMalgache(enfant[1]))
    this.datenaiss = datenaiss.concat(' ', NombreEnLettre(enfant[0]))

    const mere: any = this.CopieSelected['mere']['datenaissMere']?.split("-")
    const datenaissMere = NombreEnLettre(mere[2]).concat(' ', MoisMalgache(mere[1]))
    this.datenaissMere = datenaissMere.concat(' ', NombreEnLettre(mere[0]))
    console.log(this.datenaiss, this.datenaissMere)

    const pere: any = this.CopieSelected['pere']['datenaissPere']?.split("-")
    const datenaissPere = NombreEnLettre(pere[2]).concat(' ', MoisMalgache(pere[1]))
    this.datenaissPere = datenaissPere.concat(' ', NombreEnLettre(pere[0]))
    console.log(this.datenaissPere)

    const declarant: any = this.CopieSelected['declarant']['datenaissDeclarant']?.split("-")
    const datenaissDeclarant = NombreEnLettre(declarant[2]).concat(' ', MoisMalgache(declarant[1]))
    this.datenaissDeclarant = datenaissDeclarant.concat(' ', NombreEnLettre(declarant[0]))
    console.log(this.datenaissDeclarant)

    const datenow = new Date(Date.now()).toLocaleString().split(',')[0];
    const localdate: any = datenow.split(" ");
    const currentdate = localdate[0].split("/");

    const date = NombreEnLettre(currentdate[0]).concat(' ', MoisMalgache(currentdate[1]))
    this.dateregistre = date.concat(' ', NombreEnLettre(currentdate[2]))
    console.log(this.dateregistre)

    return this.datenaiss, this.datenaissMere, this.datenaissPere, this.datenaissDeclarant, this.dateregistre

  }

  openDialog() {

   

    if (
      this.EnfantFormGroup.valid &&
      this.PiecesFormGroup.valid &&
      this.AdoptionFormGroup.valid
    ) {
      this.EnfantFormGroup.value.dateEnfant = this.datenaiss
      this.EnfantFormGroup.value.dateMere = this.datenaissMere
      this.EnfantFormGroup.value.datePere = this.datenaissPere
      this.EnfantFormGroup.value.dateDeclarant = this.datenaissDeclarant
      this.EnfantFormGroup.value.dateregistre = this.dateregistre


      this.data = {
        ...this.AdoptionFormGroup.value,
        ...this.EnfantFormGroup.value,
        ...this.CopieSelected

      };

      const dialogRef = this.dialog.open(AdoptionCopieComponent, {
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '90%',
        width: '85%',
        panelClass: 'full-screen-modal',
        data: this.data,
      });

    }

  }
}

@Component({
  selector: 'app-copie',
  templateUrl: 'adoption-copie.component.html',

})
export class AdoptionCopieComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private adoptionservice: AdoptionService,
    public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    console.log("data",this.data.idPremierCopie)
  }

  saveCertificate() {

    this.adoptionservice.addAdoption(this.data.idPremierCopie, this.data).subscribe(data => {

      const dialogRef = this.dialog.closeAll();
      this.router.navigate(['/dashboard/adoption-naissance']);
    })
    console.log(this.data)

  }
}