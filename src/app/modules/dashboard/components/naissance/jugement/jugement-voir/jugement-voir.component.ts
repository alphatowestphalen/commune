import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { JugementService } from 'src/app/modules/dashboard/services/jugement.service';
import { PremiereCopieService } from 'src/app/modules/dashboard/services/premiere-copie.service';

@Component({
  selector: 'app-jugement-voir',
  templateUrl: './jugement-voir.component.html',
  styleUrls: ['./jugement-voir.component.scss']
})
export class JugementVoirComponent implements OnInit {
  id: any;
  certificates: any;
  jugement: any;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private premierecopieservice: PremiereCopieService, private jugementservice: JugementService) { }

  @ViewChild('htmlData') htmlData!: ElementRef;
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');

      this.getjugementByID();
    });
  }

  getjugementByID() {
    this.jugementservice.getJugementById(this.id).subscribe(copie => {
      this.jugement = copie;
      this.getCertificatesbyID(copie.premierCopie.idPremierCopie);
    });
  }

  getCertificatesbyID(idCert: number) {
    this.premierecopieservice.getCertificateByID(idCert).subscribe(data => {
      this.certificates = data;
      console.log('===============getCertificatesbyID=====================');
      console.log(this.certificates);
      console.log('====================================');
    });
  }
  OpenCopie = false;
  toggleModal() {
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

  printPage() {
    var printContents = document.getElementById('htmlData')!.innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }

}
