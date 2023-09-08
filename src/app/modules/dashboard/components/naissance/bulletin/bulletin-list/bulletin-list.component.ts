import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Column } from 'src/app/modules/dashboard/models/column';
import { BulletinNaissanceService } from 'src/app/modules/dashboard/services/bulletin-naissance.service';
import { PremiereCopieService } from 'src/app/modules/dashboard/services/premiere-copie.service';
@Component({
  selector: 'app-bulletin-list',
  templateUrl: './bulletin-list.component.html',
  styleUrls: ['./bulletin-list.component.scss']
})
export class BulletinListComponent implements OnInit {
 Opendemande=  false;
  bulletin: any;
  displayedColumns = [
    'id',
    'name',
    'datenaiss',
    'dateenregistrement',
    'actions',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  tableData: any;
  size:any = '';
  page = 0;
  nombre: number = 0;


  constructor( private router: Router, public dialog: MatDialog, private bulletinservice: BulletinNaissanceService) { }




  ngOnInit(): void {
    this.getAllService(this.size, this.page);
   
  }

  getAllService(size: number, page: number){
    this.bulletinservice.getAllBulletin(size, page)
    .subscribe(data=>{
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      this.tableData = data.BulletinNaiss 
      this.dataSource = new MatTableDataSource(this.tableData);
     this.dataSource.paginator = this.paginator
      console.log(this.tableData,)
      
    })

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  showRow(element: any) {
    this.router.navigate(['/dashboard/premiere-copie-voir', element.idPremierCopie ])

  }



  // editRow(element: any) {
  //   console.log('Edit row', element);
  //   this.premierecopieservice.updateCertificate(element.idPremierCopie, element)
  //     .subscribe(data=> {
  //       this.getfirstCertificates(this.size, this.page)
        
  //     })
  // }

  // deleteRow(element: any) {
  //   this.premierecopieservice.deleteCertificate(element.idPremierCopie)
  //     .subscribe(data=> { 
  //       this.getfirstCertificates(this.size, this.page)
  //       console.log('Delete row', data);
  //     })
  
  // }
  pageChange(event: PageEvent) {
    console.log(event)
    // this.size = event.pageSize
    this.getAllService(event.pageSize, event.pageIndex)
    }


  AskRow(row:any ){
  
   this.bulletin = row;
    this.Opendemande = !this.Opendemande;
  

  }  

  nextDialog(nombre: any){
    console.log(nombre)
   this.Opendemande = ! this.Opendemande
    
  }

  exitDialog(){
    this.nombre = 0;
    this.Opendemande = false;
  }

 

}
