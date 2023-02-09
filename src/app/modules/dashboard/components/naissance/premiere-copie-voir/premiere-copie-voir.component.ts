import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { ActivatedRoute, Router } from '@angular/router';
import { PremiereCopieService } from '../../../services/premiere-copie.service';

@Component({
  selector: 'app-premiere-copie-voir',
  templateUrl: './premiere-copie-voir.component.html',
  styleUrls: ['./premiere-copie-voir.component.scss']
})
export class PremiereCopieVoirComponent implements OnInit {
  id: any;
  certificates: any;

  constructor( private activatedroute: ActivatedRoute, private router: Router, private premierecopieservice: PremiereCopieService) { }
  @ViewChild('htmlData') htmlData!: ElementRef;
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id');
    this.getCertificatesbyID();});
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

    getCertificatesbyID(){
      this.premierecopieservice.getCertificateByID(this.id)
      .subscribe(data => {
        this.certificates = data;
      this.certificates.mentions = [
        {
          "idAdoption": 0,
          "parentAdoptif": "string",
          "dateAdoption": "string",
          "heureAdoption": "string",
          "numAdoption": "string",
          "createdDate": "2023-02-09T10:52:38.666Z",
          "type": "adoption",
        }
      ]
      })     
    }
}
