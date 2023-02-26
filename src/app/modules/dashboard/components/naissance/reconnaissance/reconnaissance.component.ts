import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Column } from '../../../models/column';
import { ReconnaissanceService } from '../../../services/reconnaissance.service';


@Component({
  selector: 'app-reconnaissance',
  templateUrl: './reconnaissance.component.html',
  styleUrls: ['./reconnaissance.component.scss']
})
export class ReconnaissanceComponent implements OnInit {

  reconnaissance: any;
  
  tableColumns: Array<Column> = [
    {
      columnDef: 'idReconnaissance',
      header: 'N° Copie Reconnaissance',
      cell: (element: Record<string, any>) => `${element['idReconnaissance']}`
    },
    {
      columnDef: 'nom',
      header: 'Nom et Prénoms',
      cell: (element: Record<string, any>) => `${element['premierecopie']['enfant']['nomEnfant']} ${element ['premierecopie']['enfant']['prenomsEnfant']}`,
    
    },
    {
      columnDef: 'dateReconnaissance',
      header: 'Date de reconnaissance ',
      cell: (element: Record<string, any>) => `${element['createdDate']}`
    },
    {
      columnDef: 'DatePremiereCopie',
      header: 'Date 1ère Copie',
      cell: (element: Record<string, any>) => `${element['premierecopie']['datePremierCopie']}`
    }
  ];
  
  tableData: any = [];
 


  constructor( public dialog: MatDialog, private router:Router, private reconnaissanceservice: ReconnaissanceService) {
    
    }

  
    @ViewChild('htmlData') htmlData!: ElementRef;

  
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
  
    }
  

  ngOnInit(): void {
   this.getAllReconnaissance()
  }

  getAllReconnaissance(){
    this.reconnaissanceservice.getAllReconnaissance()
    .subscribe((data: any)=>{
      this.tableData = data.reconnaissance;
      console.log(this.tableData)
    })
  }


  showRow(element: any) {
    this.router.navigate(['/dashboard/reconnaissance-copie-voir', element.idReconnaissance ])

  }

  editRow(element: any) {
    console.log('Edit row', element);
    this.reconnaissanceservice.updateReconnaissance(element.idReconnaissance, element)
      .subscribe((data: any)=> {
        this.getAllReconnaissance();
        
      })
  }

  deleteRow(element: any) {
    this.reconnaissanceservice.deleteReconnaissance(element.idReconnaissance)
      .subscribe((data: any)=> { 
        this.getAllReconnaissance();
        console.log('Delete row', data);
      })
  
  }

  
}

