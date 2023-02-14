
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {  Router } from '@angular/router';
import { Column } from '../../../models/column';
import { AdoptionService } from '../../../services/adoption.service';
import { PremiereCopieService } from '../../../services/premiere-copie.service';


@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.scss']
})
export class AdoptionComponent implements OnInit {
 adoption: any;
 tableColumns: Array<Column> = [
  {
    columnDef: 'idAdoption',
    header: 'N° Première Copie',
    cell: (element: Record<string, any>) => `${element['idAdoption']}`
  },
  {
    columnDef: 'nom',
    header: 'Nom et Prénoms',
    cell: (element: Record<string, any>) => `${element['enfant']['nomEnfant']} ${element['enfant']['prenomsEnfant']}`,
  
  },
  {
    columnDef: 'dateAdoption',
    header: 'Date d\'Adoption ',
    cell: (element: Record<string, any>) => `${element['datedoption']}`
  },
  {
    columnDef: 'DatePremiereCopie',
    header: 'Date Copie',
    cell: (element: Record<string, any>) => `${element['datePremierCopie']}`
  }
];

tableData: any = [];

  constructor( public dialog: MatDialog, private adoptionservice: AdoptionService, private premierecopie: PremiereCopieService, private router:Router) {

  
  } 
  

  @ViewChild('htmlData') htmlData!: ElementRef;


  ngOnInit(): void {
   
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace

  }

  getAlladoption(){
    this.adoptionservice.getAllAdoption()
    .subscribe(data =>{
      this.adoption = data;
    })
  }

  showRow(element: any) {
    this.router.navigate(['/dashboard/adoption-voir', element.idAdoption ])

  }

  editRow(element: any) {
    console.log('Edit row', element);
    this.adoptionservice.updateAdoption(element.idAdoption, element)
      .subscribe(data=> {
        this.getAlladoption();
        
      })
  }

  deleteRow(element: any) {
    this.adoptionservice.deleteAdoption(element.idAdoption)
      .subscribe(data=> { 
        this.getAlladoption();
        console.log('Delete row', data);
      })
  
  }

  // getAllFirstCertificate(){
  //   this.premierecopie.getFirstCertificates()
  //   .pipe(map(data =>{
      
  //   }))
  // }
}


