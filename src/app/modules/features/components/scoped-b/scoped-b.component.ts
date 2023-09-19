import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UtilisateurService } from '../../services/utilisateur.service';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard.service';


@Component({
  selector: 'app-scoped-b',
  templateUrl: './scoped-b.component.html',
  styleUrls: ['./scoped-b.component.scss']
})
export class ScopedBComponent implements OnInit {
  tableData: any;
  size:any = '';
  page = 0;
  nombre: number = 0;
  acteDeNaisse: number; // acte de naissance
  acteDeMariage: number; // acte de mariage
  acteDeDecee: number; // acte de dece
  nbrUser:number; // nbr user 

  constructor( private userservice:UtilisateurService, private dashboardService: DashboardService) {} 
 
  historique:any = "";
  displayedColumns = [
    'id',
    'modifyby',
    'operation',
    'dateenregistrement',
    
   
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
 

  ngOnInit(): void {
    // this.getAllHistorique();
    this.getAllState();
  }

  getAllState(){
    this.dashboardService.getAllStatus().subscribe((data: any)=>{
      this.acteDeNaisse = data.bulletinNaissance.nombre.nombre;
      this.acteDeMariage = data.mariage.nombre.nombre;
      this.acteDeDecee = data.acteDeces.nombre.nombre;
      this.nbrUser = data.nbrUser;
    })
  }
}
