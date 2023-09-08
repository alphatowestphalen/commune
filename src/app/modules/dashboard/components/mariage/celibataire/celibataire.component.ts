import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { CelibataireService } from 'src/app/service/celibataire/celibataire.service';
import { Router } from '@angular/router';
import { ActeCelibataire } from 'src/app/model/acteCelibataire/ActeCelibataire.interface';

@Component({
  selector: 'app-celibataire',
  templateUrl: './celibataire.component.html',
  styleUrls: ['./celibataire.component.scss']
})
export class CelibataireComponent implements OnInit {
  Opendemande=  false;
  bulletin: any;
  displayedColumns = [
    "idActeCelibataire",
    "nomFkt",
    "numCin",
    "dateCin",
    "lieuCin",
    "actions",
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  tableData: any;

  size:number = 5;
  page = 0;
  nombre: number = 0;
  constructor(private acteCelibataire:CelibataireService,private router: Router ) { }

  ngOnInit(): void {
    this.getAllService(this.size, this.page);
  }

  AskRow(row:any ){
  
    this.bulletin = row;
     this.Opendemande = !this.Opendemande;
  }  
  pageChange(event: PageEvent) {
    console.log(event)
    // this.size = event.pageSize
    this.getAllService(event.pageSize, event.pageIndex)
    }
    getAllService(size: number, page: number){
      this.acteCelibataire.getAllCellibataire(size, page)
      .subscribe(data=>{
        this.tableData = data.data;
        this.dataSource = new MatTableDataSource(this.tableData);
       this.dataSource.paginator = this.paginator
        console.log(this.tableData,)
        
      })
  
    }
}
