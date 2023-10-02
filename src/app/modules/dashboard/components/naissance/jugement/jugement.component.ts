import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Column } from '../../../models/column';
import { JugementService } from '../../../services/jugement.service';
import { filter } from 'rxjs';


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
      header: 'N° Jugement',
      cell: (element: Record<string, any>) => `${element['idJugement']}`
    },
    {
      columnDef: 'nom',
      header: 'Nom et Prénoms',
      cell: (element: Record<string, any>) => `${element['premierCopie']['enfant']['nomEnfant']} ${element ['premierCopie']['enfant']['prenomsEnfant']}`,
    
    },
    {
      columnDef: 'dateAdoption',
      header: 'Date de Jugement ',
     cell: (element: Record<string, any>) => {
        const datenaissEnfant = element['createdDate'];
        const dateObj = new Date(datenaissEnfant);
        const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;
        return formattedDate;
      }
      
    },
    {
      columnDef: 'DatePremiereCopie',
      header: 'Info de Jugement',
      cell: (element: Record<string, any>) => {
        const infoChangement = element['infoChangement'];
         return infoChangement;
      } }
  ];
  
  tableData: any = [];
  page= 1;
  size= 10;
  search: any;


  constructor( public dialog: MatDialog, private router:Router, private jugementservice: JugementService) {
    }
    @ViewChild('htmlData') htmlData!: ElementRef;
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      if(filterValue){
        this.getSearchAllJugements(filterValue)
      }else{
        this.getAllJugements(this.size, this.page)
      }
    }
    ngOnInit(): void {
    this.getAllJugements(this.size, this.page)
    }

    getSearchAllJugements(query: string){
      this.jugementservice.getSearchJugements(this.size, this.page, query)
      .subscribe(data=>{
        this.tableData = data.data;
      })
    }

  getAllJugements(size: number, page: number){
    this.jugementservice.getJugements(size, page)
    .subscribe(data=>{
      this.tableData = data.data;
    })
  }


  showRow(element: any) {
    this.router.navigate(['/dashboard/jugement-copie-voir', element.idJugement ])

  }

  editRow(element: any) {
    console.log('Edit row', element);
    this.jugementservice.updateJugement(element.idJugement, element)
      .subscribe((data: any)=> {
        this.getAllJugements(this.size, this.page)
      })
  }

  deleteRow(element: any) {
    this.jugementservice.deleteJugement(element.idJugement)
      .subscribe((data: any)=> {
        this.getAllJugements(this.size, this.page)
        console.log('Delete row', data);
      })
  }

  handlePageChange(event: PageEvent){
    this.getAllJugements(event.pageSize, event.pageIndex)

  }
}

