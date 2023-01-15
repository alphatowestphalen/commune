import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-premiere-copie-voir',
  templateUrl: './premiere-copie-voir.component.html',
  styleUrls: ['./premiere-copie-voir.component.scss']
})
export class PremiereCopieVoirComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  OpenCopie = false;
  toggleModal(){
    this.OpenCopie = !this.OpenCopie;
  }
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('copie.pdf');
    });
  }

}
