import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Column } from 'src/app/modules/dashboard/models/column';
import { BulletinNaissanceService } from 'src/app/modules/dashboard/services/bulletin-naissance.service';
@Component({
  selector: 'app-bulletin-list',
  templateUrl: './bulletin-list.component.html',
  styleUrls: ['./bulletin-list.component.scss']
})
export class BulletinListComponent implements OnInit {


  displayedColumns = [
    'id',
    'name',
    'datenaiss',
    'dateenregistrement',
    'actions',
  ];
  dataSource!: MatTableDataSource<any>;
  
  tableData: any;
  size:any = '';
  page = 0;

  constructor( private router: Router,  private bulletinservice: BulletinNaissanceService) { }




  ngOnInit(): void {
    this.getAllService(this.size, this.page);
   
  }

  getAllService(size: number, page: number){
    this.bulletinservice.getAllBulletin(size, page)
    .subscribe(data=>{
      this.tableData = data
      this.dataSource = new MatTableDataSource(this.tableData);
      console.log(this.tableData)
      
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
}
