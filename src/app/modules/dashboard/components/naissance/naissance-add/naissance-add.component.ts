import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-naissance-add',
  templateUrl: './naissance-add.component.html',
  styleUrls: ['./naissance-add.component.scss'],
})
export class NaissanceAddComponent implements OnInit {
  isLinear = true;

  data: any;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {}

  PiecesFormGroup = this._formBuilder.group({});

  EnfantFormGroup = this._formBuilder.group({
    nomEnfant: [''],
    prenomsEnfant: '',
    datenaissEnfant: [''],
    lieuNaissEnfant: [''],
    heurenaissEnfant: [''],
    sexeEnfant: [''],
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
    nomMere: [''],
    prenomsMere: '',
    datenaissMere: [''],
    lieuNaissMere: [''],
    professionMere: [''],
    adresseMere: [''],
  });
  DeclarantFormGroup = this._formBuilder.group({
    nomDeclarant: [''],
    prenomsDeclarant: '',
    datenaissDeclarant: [''],
    lieuNaissDeclarant: [''],
    adresseDeclarant: [''],
  });
  MaireFormGroup = this._formBuilder.group({
    nomMaire: [''],
    prenomsMaire: '',
    fonction: [''],
  });
  @ViewChild('htmlData') htmlData!: ElementRef;
  ngOnInit(): void {}

  openDialog() {
   

    if (
      this.EnfantFormGroup.valid &&
      this.DeclarantFormGroup.valid &&
      this.MaireFormGroup.valid &&
      this.MereFormGroup.valid &&
      this.PereFormGroup.valid &&
      this.PiecesFormGroup.valid
    ) {
      this.data = {
        ...this.EnfantFormGroup.value,
        ...this.DeclarantFormGroup.value,
        ...this.MaireFormGroup.value,
        ...this.PereFormGroup.value,
        ...this.MereFormGroup.value,
        ...this.PiecesFormGroup.value,
      };
      const dialogRef = this.dialog.open(AfficheCopieComponent, {
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '90%',
        width: '85%',
        panelClass: 'full-screen-modal',
        data : this.data
      });
    }

    // console.log(this.data);
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
  constructor(@Inject (MAT_DIALOG_DATA) public data: any ) {}

  ngOnInit() {
    
    console.log(this.data)
  }
}
