import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TranslocoService } from '@ngneat/transloco';
import { MatTableDataSource } from '@angular/material/table';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { DashboardService } from '../../../services/dashboard.service';


@Component({
  selector: 'app-naissance-home',
  templateUrl: './naissance-home.component.html',
  styleUrls: ['./naissance-home.component.scss']
})
export class NaissanceHomeComponent implements OnInit {
  

  constructor(private  UserService:UtilisateurService,private dashboardService:DashboardService , public translocoService: TranslocoService){}

  historique:any = "";
  displayedColumns = [
    'id',
    'name',
    'datenaiss',
    'dateenregistrement',
   
  ];

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  tableData: any;
  size:any = '';
  page = 0;
  nombre: number = 0;
  statistiquePremierCopie:number ;
  statistiqueAdoption:number ;
  statistiqueJugement:number ;
  statistiqueReconaissance:number ;


  ngOnInit(): void {
    this.getAllHistorique();
   this.getAllState();
  }

  switchLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
    location.reload();
  }

  getAllHistorique(){
    this.UserService.historiqueUser().subscribe(data=>{
      this.historique = data
      this.dataSource = new MatTableDataSource(this.historique);
      this.dataSource.paginator = this.paginator;
    })
  }

  /**
   * name
   */
  public getAllState() {
    this.dashboardService.getAllStatus().subscribe((status) => {
      this.statistiquePremierCopie = status.premierCopie.nombre.nombre;
      this.statistiqueJugement = status.jugement.nombre.nombre;
      this.statistiqueReconaissance = status.reconnaissance.nombre.nombre;
      this.statistiqueAdoption = status.adoption.nombre.nombre;
    })
  }

  } 
  
  
 


