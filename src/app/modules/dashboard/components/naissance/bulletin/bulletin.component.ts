import { FormService } from '../../../services/form.service';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { SurveyCreatorModel } from 'survey-creator-core';
import { Model } from 'survey-core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Column } from '../../../models/column';
import { BulletinNaissanceService } from '../../../services/bulletin-naissance.service';
import { BulletinNaicensse } from 'src/app/model/bulletin/Buletin.interface';
import { BulletinService } from 'src/app/service/bulletin/bulletin.service';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss'],
})
export class BulletinComponent implements OnInit {
  defaultJson: any;
  formName: string = 'BulletinNaissance';
  bulletin: any;
  surveyModel: any;
  surveyCreatorModel: any;

  // variable alphato
  buletinNaissance:BulletinNaicensse = {
    idBulletinNaissance: 0,
    idPremierCopie: "",
    type: "",
    nomPersonne: "",
    prenomsPersonne: "",
    dateNaissPersonne: "",
    lieuNaissPersonne: "",
    nomPere: "",
    prenomsPere: "",
    nomMere: "",
    prenomsMere: "",
    dateCopie: "",
    createdDate: "2023-09-07T14:27:20.053Z"
  }
  // end
  size: 5;
  page = 1;

  search: any;

  tableColumns: Array<Column> = [
    {
      columnDef: 'idbulletin',
      header: 'N° bulletin Copie',
      cell: (element: Record<string, any>) => `${element['idbulletin']}`,
    },
    {
      columnDef: 'nom',
      header: 'Nom et Prénoms',
      cell: (element: Record<string, any>) =>
        `${element['premierecopie']['enfant']['nomEnfant']} ${element['premierecopie']['enfant']['prenomsEnfant']}`,
    },
    {
      columnDef: 'datebulletin',
      header: "Date d'bulletin ",
      cell: (element: Record<string, any>) => `${element['datebulletin']}`,
    },
    {
      columnDef: 'DatePremiereCopie',
      header: 'Date 1ère Copie',
      cell: (element: Record<string, any>) =>
        `${element['premierecopie']['datePremierCopie']}`,
    },
  ];

  tableData: any = [];
  creatorOptions: any = {
    showLogicTab: true,
    isAutoSave: true,
  };

  constructor(
    public dialog: MatDialog,
    private bulletinService: BulletinNaissanceService,
    private formService: FormService,
    private router: Router,
    private bulletinservice: BulletinService,
  ) {}

  @ViewChild('htmlData') htmlData!: ElementRef;

  ngOnInit(): void {
    this.getAllBulletinNaissance(this.size, this.page);
  }

  OpenDialog(){
    const dialogRef = this.dialog.open(AfficheCopieComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '90%',
      width: '85%',
      panelClass: 'full-screen-modal',
      data : [this.buletinNaissance, this.creatorOptions]
    });

  } 
  public getAllBulletinNaissance(size:number, page:number) {
    this.bulletinService.getAllBulletin(size,page).subscribe((data: any) => {
      this.tableData = data;
      console.log(data);
    });
  }

  public saveBulletinNaissance(){
    this.bulletinservice.saveBulletin(this.buletinNaissance).subscribe(data=>{
      this.buletinNaissance = data;
      
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
sender:any; options: any;
  ngOnInit() {
 
  this.sender = this.data[0],
  this.options = this.data[1]
 console.log(this.sender.valuesHash)
  }

  saveBulletin(){
    console.log('=============== saveBulletin =====================');
    console.log(this.data[0]);
    console.log('====================================');
    this.bulletinservice.addBuletinNessanace(this.data[0]).subscribe(data=>{
      const dialogRef = this.dialog.closeAll();
      this.router.navigate(['/dashboard/bulletin-naissance-list']);
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