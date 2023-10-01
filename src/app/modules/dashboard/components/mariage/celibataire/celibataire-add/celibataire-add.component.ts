import { Component, Inject, OnInit } from '@angular/core';

import { ActeCelibataire, ActeCelibataireExterne, ActeCelibataireInterne } from 'src/app/model/acteCelibataire/ActeCelibataire.interface';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CelibataireService } from 'src/app/service/celibataire/celibataire.service';
import { PremiereCopieService } from 'src/app/modules/dashboard/services/premiere-copie.service';
import { ActeCellibataireService } from 'src/app/modules/dashboard/services/acteCellibataire.service';
@Component({
  selector: 'app-celibataire-add',
  templateUrl: './celibataire-add.component.html',
  styleUrls: ['./celibataire-add.component.scss']
})
export class CelibataireAddComponent implements OnInit {
  a:any;
  acteCelibataire: ActeCelibataire = {
    nomFkt: '',
    numCin: '',
    dateCin: '',
    lieuCin: '',
    genre: '',
    nom: '',
    lieuDeNaiss: '',
    nomPere: '',
    nomMere: '',
    dateDeNaiss: '',
    dateActe: '',
    idPremierCopie: ''
  };
  acteCelibataireInterne: ActeCelibataireInterne = {
    nomFkt: "",
    numCin: "",
    dateCin: "",
    lieuCin: "",
    idPremierCopie: ""
  };
  acteCelibataireExterne: ActeCelibataireExterne = {
    nomFkt : '',
    numCin : '', 
    dateCin : '',
    lieuCin : '', 
    genre : '', 
    nom : '', 
    lieuDeNaiss : '', 
    nomPere : '',
    nomMere : '',
    dateDeNaiss : '',
  }

  premiserCopie:any={}
  typePressonne: string="interne";
  
  constructor(private router:Router, private acteCelibataireObjet:ActeCellibataireService, private celibataireService: CelibataireService, private premierCopieService: PremiereCopieService, public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getAllPremierCopier();
  }
  saveActeCelibataire(){
      this.acteCelibataireInterne = this.acteCelibataireObjet.ActeInterne(this.acteCelibataire,this.acteCelibataireInterne)
      console.log('===============this.acteCelibataireInterne=====================');
      console.log(this.acteCelibataireInterne);
      console.log('====================================');
      this.celibataireService.addCellibataires(this.acteCelibataireInterne).subscribe(data=>{
        this.router.navigate(['/dashboard/celibat-list']);
      })

  }
  getAllPremierCopier(){
    this.premierCopieService.getFirstCertificates().subscribe(data=>{
      console.log('================= getAllPremierCopier ====================');
      console.log(data.data);
      console.log('====================================');
      this.premiserCopie = data.data;
    })
  }
  changerId(value:any){
    this.premierCopieService.getCertificateByID(value).subscribe(data=>{
      console.log('================changerId====================');
      this.acteCelibataire = data;
      this.acteCelibataire.nom = data.enfant.nomEnfant; 
      this.acteCelibataire.genre = data.enfant.sexeEnfant == "garcon"?"HOMME": "FEMME";
      this.acteCelibataire.lieuDeNaiss = data.enfant.lieunaissEnfant;
      this.acteCelibataire.dateDeNaiss = data.enfant.datenaissEnfant;
      console.log(data);
      console.log('====================================');
    })
  }
  handelChageGenre(value:any){
    this.acteCelibataireExterne.genre = value;
  }
  changeTypePersonne(value:any){
    this.typePressonne = value;
  }
  OpenDialog(){
    console.log('==================in modale==================');
    console.log(this.acteCelibataireInterne);
    console.log('====================================');
    const dialogRef = this.dialog.open(CelibataireAffichageComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '90%',
      width: '85%',
      panelClass: 'full-screen-modal',
      data : [this.acteCelibataireInterne]
    });

  } 

}

@Component({
  selector: 'bulletin-naissance',
  templateUrl: 'celibataire-affichage.component.html',
})
export class CelibataireAffichageComponent {
  constructor(@Inject (MAT_DIALOG_DATA) public data: any, private celibataireService: CelibataireService,
   public dialog: MatDialog, private router:Router  ) {}
sender:any; options: any;
  ngOnInit() {
   console.log('=================data in modal in celibatiare===================');
   console.log(this.data);
   console.log('===================================='); 
  this.sender = this.data[0],
  this.options = this.data[1]
 console.log(this.sender.valuesHash)
  }

  saveBulletin(){
    console.log('=============== saveBulletin =====================');
    console.log(this.data[0]);
    console.log('====================================');
    // this.celibataireService.addCellibataires(this.data[0]).subscribe(data=>{
    //   const dialogRef = this.dialog.closeAll();
    //   this.router.navigate(['/dashboard/celibataire-list']);
    // })
  //   this.bulletinservice.saveBulletin(this.sender, this.options).subscribe(
  //     (data) => {
  //       this.options.showDataSavingSuccess();   
  //       const dialogRef = this.dialog.closeAll();
  //        this.router.navigate(['/dashboard/bulletin-naissance-list']);  
  //     },
  //     (error) => {
  //       this.options.showDataSavingError();
  //     }
  //   );
  //   console.log(this.data)

  }
}
