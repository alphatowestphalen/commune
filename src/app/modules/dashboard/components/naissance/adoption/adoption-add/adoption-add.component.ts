import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PremiereCopieService } from 'src/app/modules/dashboard/services/premiere-copie.service';
import { debounceTime, tap, switchMap, finalize, distinctUntilChanged, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const API_KEY = "e8067b53"

@Component({
  selector: 'app-adoption-add',
  templateUrl: './adoption-add.component.html',
  styleUrls: ['./adoption-add.component.scss']
})
export class AdoptionAddComponent implements OnInit {
  adoption: any;
  certificate: any;
  keyword = "ProjectTitle"

  constructor(private _formBuilder: FormBuilder, private premierecopie: PremiereCopieService, private http: HttpClient) { }

//   PiecesFormGroup = this._formBuilder.group({});
//   EnfantFormGroup = this._formBuilder.group({
//     nomEnfant: [''],
//     prenomsEnfant: '',
//     datenaissEnfant: [''],
//     lieunaissEnfant: [''],
//     heurenaissEnfant: [''],
//     dateEnfant: [''],
//     idPremiereCopie: ['']
//   });
//   AdoptionFormGroup = this._formBuilder.group({
//    infoChangement: [''],
//    numChangement: [''],
//   });


//   ngOnInit(): void {
//     this.getAllFirstCertificate();
//   }

//   getAllFirstCertificate(){
//     this.premierecopie.getFirstCertificates()
//     .subscribe(data=>{
//      this.adoption = data.premierCopies
//      console.log(this.adoption)
//     })
//   }

//   onChange(event: any){

//     this.premierecopie.getCertificateByID(event)
//     .subscribe(data=>{
//       this.certificate = data;
//      console.log(this.certificate)
//     })
//      } 
// }


searchMoviesCtrl = new FormControl();
  filteredMovies: any;
  isLoading = false;
  errorMsg!: string;
  minLengthTerm = 1;
  selectedMovie: any = "";


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
        
        switchMap(value => this.premierecopie.getCertificateByID(value)
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
}