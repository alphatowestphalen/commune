import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { CelibataireService } from 'src/app/service/celibataire/celibataire.service';
import { Router } from '@angular/router';
import { Column } from '../../../models/column';

@Component({
  selector: 'app-celibataire',
  templateUrl: './celibataire.component.html',
  styleUrls: ['./celibataire.component.scss']
})
export class CelibataireComponent implements OnInit {
  Opendemande = false;
  bulletin: any;
  tableColumns: Array<Column> = [
    {
      columnDef: 'idCelibataire',
      header: 'N° Celibataire ',
      cell: (element: Record<string, any>) => `${element['idActeCelibataire']}`,
    },
    {
      columnDef: 'nom',
      header: 'Nom et Prénoms',
      cell: (element: Record<string, any>) =>
        `${element['nom']}`,
    },
    {
      columnDef: 'date  acte de celibataire',
      header: 'Date de Acte  ',
     cell: (element: Record<string, any>) => {
        const datenaissEnfant = element['dateActe'];
        const dateObj = new Date(datenaissEnfant);
        const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;
        return formattedDate;
      }
    },
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  tableData: any;

  size = 5;
  page = 1;
  nombre: number = 0;
  constructor(private acteCelibataire: CelibataireService, private router: Router) { }

  ngOnInit(): void {
    this.getAllService(this.size, this.page);
  }

  AskRow(row: any) {

    this.bulletin = row;
    this.Opendemande = !this.Opendemande;
  }
  pageChange(event: PageEvent) {
    // this.size = event.pageSize
    this.getAllService(event.pageSize, event.pageIndex)
  }
  getAllService(size: number, page: number) {
    this.acteCelibataire.getAllCellibataire(size, page)
      .subscribe(data => {
        this.tableData = data.data;
        console.log('===============getAllService=====================');
        console.log(this.tableData);
        console.log('====================================');
      })

  }
  showRow(element: any) {
    this.router.navigate(['/dashboard/celibataire-show', element.idActeCelibataire ])

  }
  handlePageChange(event: PageEvent){
    this.getAllService(event.pageSize, event.pageIndex)
  
  }
}

