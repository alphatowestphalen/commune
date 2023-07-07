import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-utilisateur-voir',
  templateUrl: './utilisateur-voir.component.html',
  styleUrls: ['./utilisateur-voir.component.scss']
})
export class UtilisateurVoirComponent implements OnInit {
  id: any;
  users: any;
 

  constructor(private utilisateurservice: UtilisateurService,  private router:Router,private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getUtilisateurbyID();
    });
  }

  getUtilisateurbyID() {
    this.utilisateurservice.getUserByID(this.id)
      .subscribe(data => {
        this.users = data;
        console.log(data);
      })
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
