import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CopieComponent } from 'src/app/modules/dashboard/pages/copie/copie.component';
import { ActeCellibataireService } from 'src/app/modules/dashboard/services/acteCellibataire.service';
import { DecesService } from 'src/app/modules/dashboard/services/deces.service';
import { CelibataireService } from 'src/app/service/celibataire/celibataire.service';

@Component({
  selector: 'app-celibataire-show',
  templateUrl: './celibataire-show.component.html',
  styleUrls: ['./celibataire-show.component.css']
})
export class CelibataireShowComponent implements OnInit {
  id:number;
  certificates:any;
  constructor(private activatedroute: ActivatedRoute, private router: Router, private acteCelibataireService: CelibataireService) { }
  @ViewChild('htmlData', { static: false }) copiecomponent: CopieComponent;

  ngOnInit() {
    this.activatedroute.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
      this.getActeCelibatById(this.id) 
    })
  }

  getActeCelibatById(id:number){
    this.acteCelibataireService.getAllCelibataireById(id).subscribe((data)=>{
      this.certificates = data;
      console.log('====================================');
      console.log(this.certificates);
      console.log('====================================');
    })
  } 
  OpenCopie = false;
  toggleModal() {
    this.OpenCopie = !this.OpenCopie;
  }



  downloadPdf() {

    // this.copiecomponent.generatePDF();
  }

  public openPDF(): void {

    let DATA: any = document.getElementById('htmlData')!.innerHTML;
    console.log(DATA);
    // console.log(DATA);
    // html2canvas(DATA).then((canvas) => {
    //   let fileWidth = 208;
    //   let fileHeight = (canvas.height * fileWidth) / canvas.width;
    //   const FILEURI = canvas.toDataURL('image/png');
    //   let PDF = new jsPDF('p', 'mm', 'a4');
    //   let position = 0;
    //   PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    //   PDF.save('angular-demo.pdf');
    // });

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


}
