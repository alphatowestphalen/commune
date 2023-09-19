import { Component, Inject, OnInit } from '@angular/core';

import { ActeCelibataire } from 'src/app/model/acteCelibataire/ActeCelibataire.interface';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CelibataireService } from 'src/app/service/celibataire/celibataire.service';
@Component({
  selector: 'app-celibataire-add',
  templateUrl: './celibataire-add.component.html',
  styleUrls: ['./celibataire-add.component.scss']
})
export class CelibataireAddComponent implements OnInit {
  acteCelibataire: ActeCelibataire = {
    nomFkt: "",
    numCin: "",
    dateCin: "",
    lieuCin: "",
    dateActe: "",
    idPremierCopie: ""
  };
  
  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  OpenDialog(){
    console.log('==================in modale==================');
    console.log(this.acteCelibataire);
    console.log('====================================');
    const dialogRef = this.dialog.open(CelibataireAffichageComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '90%',
      width: '85%',
      panelClass: 'full-screen-modal',
      data : [this.acteCelibataire]
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
    this.celibataireService.addCellibataires(this.data[0]).subscribe(data=>{
      const dialogRef = this.dialog.closeAll();
      this.router.navigate(['/dashboard/celibataire-list']);
    })
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
