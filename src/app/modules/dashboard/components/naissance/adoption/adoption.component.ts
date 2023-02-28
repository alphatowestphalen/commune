
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
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

 size:any = '';
page = 0;

 tableColumns: Array<Column> = [
  {
    columnDef: 'idAdoption',
    header: 'N° Adoption Copie',
    cell: (element: Record<string, any>) => `${element['idAdoption']}`
  },
  {
    columnDef: 'nom',
    header: 'Nom et Prénoms',
    cell: (element: Record<string, any>) => `${element['premierecopie']['enfant']['nomEnfant']} ${element ['premierecopie']['enfant']['prenomsEnfant']}`,
  
  },
  {
    columnDef: 'dateAdoption',
    header: 'Date d\'Adoption ',
    cell: (element: Record<string, any>) => `${element['dateAdoption']}`
  },
  {
    columnDef: 'DatePremiereCopie',
    header: 'Date 1ère Copie',
    cell: (element: Record<string, any>) => `${element['premierecopie']['datePremierCopie']}`
  }
];

tableData: any = [];

  constructor( public dialog: MatDialog, private adoptionservice: AdoptionService,  private router:Router) {

  
  } 
  

  @ViewChild('htmlData') htmlData!: ElementRef;


  ngOnInit(): void {
    this.getAllAdoptions(this.size, this.page );
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace

  }


  getAllAdoptions(size: number, page: number){
    this.adoptionservice.getAdoptions(size, page)
    .subscribe(data=>{
      this.tableData = data.adoption;
    })
  }
  showRow(element: any) {
    this.router.navigate(['/dashboard/adoption-copie-voir', element.idAdoption ])

  }

  editRow(element: any) {
    console.log('Edit row', element);
    this.adoptionservice.updateAdoption(element.idAdoption, element)
      .subscribe(data=> {
        this.getAllAdoptions(this.size, this.page );
        
      })
  }

  deleteRow(element: any) {
    this.adoptionservice.deleteAdoption(element.idAdoption)
      .subscribe(data=> { 
        this.getAllAdoptions(this.size, this.page );
        console.log('Delete row', data);
      })
  
  }


  handlePageChange(event: PageEvent) {

    this.getAllAdoptions(event.pageSize, event.pageIndex)
  }
}


