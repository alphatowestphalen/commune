import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
import { PremiereCopieService } from '../../../services/premiere-copie.service';
import { PremiereCopie } from '../../../models/premiere-copie.model'


@Component({
  selector: 'app-premiere-copie',
  templateUrl: './premiere-copie.component.html',
  styleUrls: ['./premiere-copie.component.scss']
})
export class PremiereCopieComponent implements OnInit {
  
  columns:string[] = ['idPremiereCopie','description','datePremiereCopie','datePCopie','actions'];

  data:any  ;
  test: any;


  //dataSource = new MatTableDataSource<PremiereCopie[]>();
  showModal = false;
  constructor( public dialog: MatDialog, private premierecopieservice: PremiereCopieService) {
  } 
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('htmlData') htmlData!: ElementRef;

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllfirstCertificates();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    //this.dataSource.filter = filterValue;
  }
  openDialog(){
    this.dialog.open(PremiereCopieComponent);
    this.getAllfirstCertificates();
  }
 
  toggleModal(){
    this.showModal = !this.showModal;
  }

  getAllfirstCertificates(){
    this.premierecopieservice.getFirstCertificates()
    .subscribe(data=>{ 
     this.data = data;
   console.log(this.data)
    })
  }


  
  
  edit(idPremiereCopie: number){
    alert(idPremiereCopie);
  }

}


