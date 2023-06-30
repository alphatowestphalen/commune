import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MariageService } from 'src/app/modules/dashboard/services/mariage.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-mariage-voir',
  templateUrl: './mariage-voir.component.html',
  styleUrls: ['./mariage-voir.component.scss']
})
export class MariageVoirComponent implements OnInit {
  id: any;
  mariage: any;

  constructor(private mariageservice: MariageService, private activatedroute: ActivatedRoute) { }

  @ViewChild('htmlData') htmlData!: ElementRef;

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getMariageById();
    });
  }
  getMariageById(){
    this.mariageservice.getMariageById(this.id)
    // this.mariageservice.getAllMariage(1,2)
    .subscribe(data => {
      console.log({data});
      this.mariage = data;
     
      

    })
  }
  OpenCopie = false;
  toggleModal() {
    this.OpenCopie = !this.OpenCopie;
  }
  public openPDF(): void {

    let DATA: any = document.getElementById('htmlData')!.innerHTML;


    const doc = new jsPDF();

    html2canvas(DATA).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;
      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      doc.setFont('times', 'normal');


      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save('pdfName.pdf');
    });
  }

  printPage() {
    var printContents = document.getElementById('htmlData')!.innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }
  getMariage() {
    this.mariageservice.getMariageById(this.id).subscribe(data => {
      this.mariage = data;
      console.log(this.mariage);
    })
  }

}
