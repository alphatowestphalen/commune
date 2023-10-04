import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CopieComponent } from 'src/app/modules/dashboard/pages/copie/copie.component';
import { BulletinNaissanceService } from 'src/app/modules/dashboard/services/bulletin-naissance.service';
import { PremiereCopieService } from 'src/app/modules/dashboard/services/premiere-copie.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bulletin-voir',
  templateUrl: './bulletin-voir.component.html',
  styleUrls: ['./bulletin-voir.component.css']
})
export class BulletinVoirComponent implements OnInit {
  id: any;
  certificates: any;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private bulletinNaissanceService: BulletinNaissanceService, public dialog: MatDialog) { }
  @ViewChild('htmlData', { static: false }) copiecomponent: CopieComponent;

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getCertificatesbyID();
    });
  }
  getCertificatesbyID() {
    this.bulletinNaissanceService.getBulletinById(this.id).subscribe((data: any) => {
      this.certificates = data;
      console.log('====================================');
      console.log(this.certificates);
      console.log('====================================');
    });
  }

  OpenCopie = false;
  toggleModal() {
    this.OpenCopie = !this.OpenCopie;
  }
  
OpenDialog(){
    const dialogRef = this.dialog.open(AfficheCopieComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '90%',
      width: '85%',
      panelClass: 'full-screen-modal',
      data : [this.certificates]
    });

  }

}

@Component({
  selector: 'bulletin-naissance',
  templateUrl: 'bulletin-naissance.component.html',
})
export class AfficheCopieComponent {
  constructor(@Inject (MAT_DIALOG_DATA) public data: any, private bulletinservice: BulletinNaissanceService,
   public dialog: MatDialog, private router:Router  ) {}
option: any;

today:any;
jour:any;
mois:any;
moisString:any;
annee:any;
dateCreation:any;

idPremierCopie: any;
prenomsMere: any;
nomMere: any;
prenomsPere: any;
nomPere: any;
lieuNaissPersonne: any;
dateNaissPersonne: any;
prenomsPersonne: any;
nomPersonne: any;
idBulletinNaissance: any;
  ngOnInit() {  
  		this.idBulletinNaissance = this.data[0].idBulletinNaissance;
	  this.nomPersonne = this.data[0].nomPersonne;
	  this.prenomsPersonne = this.data[0].prenomsPersonne;
	  this.dateNaissPersonne = this.data[0].dateNaissPersonne;
	  this.lieuNaissPersonne = this.data[0].lieuNaissPersonne;
	  this.nomPere = this.data[0].nomPere;
	  this.prenomsPere = this.data[0].prenomsPere;
	  this.nomMere = this.data[0].nomMere;
	  this.idPremierCopie = this.data[0].idPremierCopie;	  
	  console.log(this.data[0].createdDate)
	  this.today = new Date(this.data[0].createdDate);
	  this.option = { month: 'long' };
	  this.mois = this.today.toLocaleString('fr-FR', this.option);

		this.jour = this.today.getDate();
		this.moisString = this.mois;
		this.annee = this.today.getFullYear();	
  }

    downloadPdf() {
this.genererCanevas()
  }
  
   genererCanevas() {
    const doc = new jsPDF({
    orientation: 'landscape', // Spécifiez l'orientation comme paysage
    unit: 'mm',
    format: 'a4'
    });
    const element = document.querySelector('.page#htmlData') as HTMLElement;
    if (element) {
      html2canvas(element).then((canevas) => {
        // console.log("Canevas genereeee !");

        const imgData = canevas.toDataURL('image/png');
        const imgWidth = 320;
        const pageHeight = 500;
        const imgHeight = canevas.height * imgWidth / canevas.width;
        let heightLeft = imgHeight;

        let position = 0;
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        doc.save("Bulletin_de_Naissance"+this.nomPersonne+" "+this.prenomsPersonne+".pdf");
        // console.log("PDF enregistré !");
    });
  }
}
}
