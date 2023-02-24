import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Column } from '../../../models/column';
import { JugementService } from '../../../services/jugement.service';


@Component({
  selector: 'app-jugement',
  templateUrl: './jugement.component.html',
  styleUrls: ['./jugement.component.scss']
})
export class JugementComponent implements OnInit {
  jugement: any;
  
  tableColumns: Array<Column> = [
    {
      columnDef: 'idJugement',
      header: 'N° Jugement Copie',
      cell: (element: Record<string, any>) => `${element['idJugement']}`
    },
    {
      columnDef: 'nom',
      header: 'Nom et Prénoms',
      cell: (element: Record<string, any>) => `${element['premierCopie']['enfant']['nomEnfant']} ${element ['premierCopie']['enfant']['prenomsEnfant']}`,
    
    },
    {
      columnDef: 'dateAdoption',
      header: 'Date d\'Adoption ',
      cell: (element: Record<string, any>) => `${element['createdDate']}`
    },
    {
      columnDef: 'DatePremiereCopie',
      header: 'Date 1ère Copie',
      cell: (element: Record<string, any>) => `${element['premierCopie']['datePremierCopie']}`
    }
  ];
  
  tableData: any = [];
  router: any;
  adoptionservice: any;

  constructor( public dialog: MatDialog, private jugementservice: JugementService) {
    
    }

  
    @ViewChild('htmlData') htmlData!: ElementRef;

  
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
  
    }
  

  ngOnInit(): void {
   this.getAllJugement()
  }

  getAllJugement(){
    this.jugementservice.getAlljugement()
    .subscribe(data=>{
      this.tableData = data.jugement;
      console.log(this.tableData)
    })
  }


  showRow(element: any) {
    this.router.navigate(['/dashboard/jugement-copie-voir', element.idAdoption ])

  }

  editRow(element: any) {
    console.log('Edit row', element);
    this.adoptionservice.updateAdoption(element.idAdoption, element)
      .subscribe((data: any)=> {
        this.getAlladoption();
        
      })
  }
  getAlladoption() {
    throw new Error('Method not implemented.');
  }

  deleteRow(element: any) {
    this.adoptionservice.deleteAdoption(element.idAdoption)
      .subscribe((data: any)=> { 
        this.getAlladoption();
        console.log('Delete row', data);
      })
  
  }

  
}

