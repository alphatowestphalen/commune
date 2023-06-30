import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { PremiereCopieService } from 'src/app/modules/dashboard/services/premiere-copie.service';
import { ReconnaissanceService } from 'src/app/modules/dashboard/services/reconnaissance.service';

@Component({
  selector: 'app-reconnaissance-voir',
  templateUrl: './reconnaissance-voir.component.html',
  styleUrls: ['./reconnaissance-voir.component.scss']
})
export class ReconnaissanceVoirComponent implements OnInit {

  id: any;
  certificates: any;
  reconnaissance: any;

  constructor( private activatedroute: ActivatedRoute, private router: Router, private premierecopieservice: PremiereCopieService, private reconnaissanceservice: ReconnaissanceService) { }

  @ViewChild('htmlData') htmlData!: ElementRef;
  ngOnInit(): void {
    
    this.activatedroute.paramMap.subscribe(params => {
     this.id = params.get('id');
 
     this.getReconnaissanceById();
   });
   }
   getReconnaissanceById() {
     this.reconnaissanceservice.getReconnaissanceById(this.id).subscribe(copie => {
       this.reconnaissance = copie;
       console.log({copie});
       
       
       this.getCertificatesbyID(copie.premierecopie.idPremierCopie);
     });
   }
 
   getCertificatesbyID(idCert: number) {
     this.premierecopieservice.getCertificateByID(idCert).subscribe(data => {
       this.certificates = data;
     });
   }
  OpenCopie = false;
  toggleModal(){
    this.OpenCopie = !this.OpenCopie;
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
  
  printPage(){
    var printContents = document.getElementById('htmlData')!.innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
  }

}
