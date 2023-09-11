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


  public searchCopie= new FormControl('')
  premieresCopies: any = [];
  isLoading = false;
  errorMsg!: string;
  minLengthTerm = 1;
  CopieSelected: any = "";
  data: any;
 idPremierCopie = new FormControl();
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
        this.adoption = data.data
      })
  }

  onChange(event: any) {
    this.premierecopie.getCertificateByID(event)
      .subscribe(data => {
        this.certificate = data;
        this.EnfantFormGroup.value.dateEnfant = this.certificate.enfant.datenaissEnfant;
      })
  }




  displayWith(value: any) {
    return value?.idPremiereCopie;
  }

 

  ngOnInit() {
  this.getAllFirstCertificate();
  }

  FirstStep() {


    const enfant: any = this.certificate['enfant']['datenaissEnfant']?.split("-")
    const datenaiss = NombreEnLettre(enfant[2]).concat(' ', MoisMalgache(enfant[1]))
    this.datenaiss = datenaiss.concat(' ', NombreEnLettre(enfant[0]))

    const mere: any = this.certificate['mere']['datenaissMere']?.split("-")
    const datenaissMere = NombreEnLettre(mere[2]).concat(' ', MoisMalgache(mere[1]))
    this.datenaissMere = datenaissMere.concat(' ', NombreEnLettre(mere[0]))
    console.log(this.datenaiss, this.datenaissMere)

    const pere: any = this.certificate['pere']['datenaissPere']?.split("-")
    const datenaissPere = NombreEnLettre(pere[2]).concat(' ', MoisMalgache(pere[1]))
    this.datenaissPere = datenaissPere.concat(' ', NombreEnLettre(pere[0]))
    console.log(this.datenaissPere)

    const declarant: any = this.certificate['declarant']['datenaissDeclarant']?.split("-")
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

  spaceResp(){
    this.CopieSelected+=" ";
  }

  closedResp(){
    this.CopieSelected="";
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
        ...this.certificate

      };

      console.log(this.data)

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
    sexe: string;

  ngOnInit() {
  //  this.data.idPremierCopie = this.data.idPremierCopie.slice(0, -4);
   // console.log("data",this.data.idPremierCopie)

    if(this.data.sexeEnfant == "fille"){
      return this.sexe == "zazavavy"

    }else {
      return this.sexe == "zazalahy"
    }
  }

  saveCertificate() {
    console.log('====================================');
    console.log(this.data);
    console.log('====================================');
    this.adoptionservice.addAdoption(this.data).subscribe(data => {
      const dialogRef = this.dialog.closeAll();
      this.router.navigate(['/dashboard/adoption-naissance']);
    })

  }
}