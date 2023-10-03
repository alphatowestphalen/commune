
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import {  Router } from '@angular/router';
import { Column } from '../../../models/column';
import { AdoptionService } from '../../../services/adoption.service';
import { TranslocoService } from '@ngneat/transloco';

import { PremiereCopieService } from '../../../services/premiere-copie.service';


@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.scss']
})
export class AdoptionComponent implements OnInit {

 adoption: any;

 size = 5;

page = 1;

search: any;


 
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
    header: 'Date et Heure d\'Adoption ',
    cell: (element: Record<string, any>) => {
      const datenaissEnfant = element['dateAdoption'];
      const heurenaissEnfant = element['heureAdoption'];
      const dateObj = new Date(`${datenaissEnfant}T${heurenaissEnfant}:00`);
      const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;
      const formattedTime = `${dateObj.getHours().toString().padStart(2, '0')}:${dateObj.getMinutes().toString().padStart(2, '0')}`;
      return `${formattedDate} ${formattedTime}`;
    }
  },
  {
    columnDef: 'DatePremiereCopie',
    header: 'Date 1ère Copie',
    cell: (element: Record<string, any>) => {
      const datenaissEnfant = element['premierecopie']['datePremierCopie'];
      // const dateObj = new Date(datenaissEnfant);
      // this.convertDateFormat(dateObj);
      // console.log('=============== datenaissEnfant =====================');
      // console.log(dateObj );
      // console.log('====================================');
      // const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;
      return datenaissEnfant;
    }
  }
];

tableData: any = [];

  constructor( public dialog: MatDialog, private adoptionservice: AdoptionService,  private router:Router,private translocoService: TranslocoService) {
  }


  ngOnInit(): void {
    this.getAllAdoptions(this.size, this.page );
    const translatedText = this.translocoService.translate('nom');
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    if(filterValue){
      this.getSearchAllAdoptions(filterValue)
    }else{
      this.getAllAdoptions(this.size, this.page );
    }
  }


  getAllAdoptions(size: number, page: number){
    this.adoptionservice.getAdoptions(size, page)
    .subscribe(data=>{
      this.tableData = data.data;
    })
  }

  getSearchAllAdoptions(query: string){
    this.adoptionservice.getSearchAdoptions(this.size, this.page,query)
    .subscribe(data=>{
      this.tableData = data.data;
    })
  }
  showRow(element: any) {
    this.router.navigate(['/dashboard/adoption-copie-voir/', element.idAdoption ])

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


