import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UtilisateurService } from '../../services/utilisateur.service';


@Component({
  selector: 'app-scoped-b',
  templateUrl: './scoped-b.component.html',
  styleUrls: ['./scoped-b.component.scss']
})
export class ScopedBComponent implements OnInit {

  constructor( private userservice:UtilisateurService ) {
  } 
 
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

  ngOnInit(): void {
    this.getAllHistorique();
   
  }

  getAllHistorique(){
    this.userservice.historiqueUser().subscribe((data: any)=>{
      this.historique = data
      this.dataSource = new MatTableDataSource(this.historique);
      this.dataSource.paginator = this.paginator;
    })
  }
}
