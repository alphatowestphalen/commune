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


  constructor( private router: Router, public dialog: MatDialog, private bulletinservice: BulletinNaissanceService) { }




  ngOnInit(): void {
    this.getAllService(this.size, this.page);
   
  }

  getAllService(size: number, page: number){
    this.bulletinservice.getAllBulletin(size, page)
    .subscribe(data=>{
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
    console.log(row)

    const dialogRef = this.dialog.open(AfficheCopieComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '90%',
      width: '85%',
      panelClass: 'full-screen-modal',
      data : row
    });
    
  }  
}



@Component({
  selector: 'bulletin-naissance',
  templateUrl: 'bulletin-naissance.component.html',
})
export class AfficheCopieComponent {
  constructor(@Inject (MAT_DIALOG_DATA) public data: any, private bulletinservice: BulletinNaissanceService,
   public dialog: MatDialog, private router:Router  ) {}

  ngOnInit() {
  console.log(this.data)
  }
  saveCertificate(){
  
    // this.bulletinservice.addFirstCertificates(this.data).subscribe(data=>{

    //   const dialogRef = this.dialog.closeAll();
    //   this.router.navigate(['/dashboard/premiere-copie']);
    // })
    console.log(this.data)

  }
}