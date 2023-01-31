import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-naissance-add',
  templateUrl: './naissance-add.component.html',
  styleUrls: ['./naissance-add.component.scss']
})
export class NaissanceAddComponent implements OnInit {
  isLinear = true;
  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) { }

  PiecesFormGroup = this._formBuilder.group({});

  EnfantFormGroup = this._formBuilder.group({
    nomEnfant: ['', Validators.required],
    prenomsEnfant:'',
    datenaissEnfant: ['', Validators.required],
    lieuNaissEnfant: ['', Validators.required],
    heurenaissEnfant: ['', Validators.required],
    sexeEnfant: ['', Validators.required],
  });

  PereFormGroup = this._formBuilder.group({
    nomPere: '',
    prenomsPere: '',
    datenaissPere: '',
    lieuNaissPere: '',
    professionPere: '',
    adressePere: '',
  });

  MereFormGroup = this._formBuilder.group({
    nomMere: ['', Validators.required],
    prenomsMere: '',
    datenaissMere: ['', Validators.required],
    lieuNaissMere: ['', Validators.required],
    professionMere: ['', Validators.required],
    adresseMere: ['', Validators.required],
  });
  DeclarantFormGroup = this._formBuilder.group({
    nomDeclarant: ['', Validators.required],
    prenomsDeclarant:'',
    datenaissDeclarant: ['', Validators.required],
    lieuNaissDeclarant: ['', Validators.required],
    adresseDeclarant: ['', Validators.required]
  });
  MaireFormGroup = this._formBuilder.group({
    nomMaire: ['', Validators.required],
    prenomsMaire: '',
    fonction: ['', Validators.required],
  });
  @ViewChild('htmlData') htmlData!: ElementRef;
  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AfficheCopieComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '90%',
      width: '85%',
      panelClass: 'full-screen-modal'
    });

console.log( this.EnfantFormGroup.value, this.DeclarantFormGroup.value, this.MaireFormGroup.value, 
  this.MereFormGroup.value, this.PereFormGroup.value, this.PiecesFormGroup.value)
  }

  public openPDF(): void {

    let DATA: any = document.getElementById('htmlData');
    console.log(DATA);
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }

  printPage() {
    var printContents = document.getElementById('htmlData')!.innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }


}

@Component({
  selector: 'affiche-copie',
  templateUrl: 'affiche-copie.component.html',
})
export class AfficheCopieComponent {

}

