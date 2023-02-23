import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PremiereCopieService } from 'src/app/modules/dashboard/services/premiere-copie.service';
import { debounceTime, tap, switchMap, finalize, distinctUntilChanged, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adoption-add',
  templateUrl: './adoption-add.component.html',
  styleUrls: ['./adoption-add.component.scss']
})
export class AdoptionAddComponent implements OnInit {
  adoption: any;
  certificate: any;

  searchMoviesCtrl = new FormControl();
  filteredMovies: any = [] ;
  isLoading = false;
  errorMsg!: string;
  minLengthTerm = 1;
  selectedMovie: any = "";



  constructor(private _formBuilder: FormBuilder, private premierecopie: PremiereCopieService, public dialog : MatDialog) { }

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
    parentAdoptif: [''],
    dateAdoption: [''],
    heureAdoption: [''],
    numAdoption: ['']
  });




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


  onSelected() {
    console.log(this.selectedMovie);
    this.selectedMovie = this.selectedMovie;
  }

  displayWith(value: any) {
    return value?.Title;
  }

  clearSelection() {
    this.selectedMovie = "";
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
        this.filteredMovies = data.premierCopies;
        console.log(data);
      });
  }

  openDialog() {
   
       const dialogRef = this.dialog.open(AdoptionCopieComponent, {
         maxWidth: '100vw',
         maxHeight: '100vh',
         height: '90%',
         width: '85%',
         panelClass: 'full-screen-modal',
        
       });
     
 
    
   }
}

@Component({
  selector: 'app-copie',
  templateUrl: 'adoption-copie.component.html',

})
export class AdoptionCopieComponent {
  constructor(@Inject (MAT_DIALOG_DATA) public data: any, private premierecopieservice: PremiereCopieService,
   public dialog: MatDialog, private router:Router  ) {}

  ngOnInit() {
  console.log(this.data)
  }

  saveCertificate(){
  
    this.premierecopieservice.addFirstCertificates(this.data).subscribe(data=>{

      const dialogRef = this.dialog.closeAll();
      this.router.navigate(['/dashboard/premiere-copie']);
    })
    console.log(this.data)

  }
}