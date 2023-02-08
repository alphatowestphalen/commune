import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
import { PremiereCopieService } from '../../../services/premiere-copie.service';
import { Column } from '../../../models/column';


@Component({
  selector: 'app-premiere-copie',
  templateUrl: './premiere-copie.component.html',
  styleUrls: ['./premiere-copie.component.scss']
})
export class PremiereCopieComponent implements OnInit {
  
  columns:string[] = ['idPremierCopie','description','datePremierCopie','datePCopie','actions'];
  columnMap = ['idPremierCopie','description','datePremierCopie','datePCopie','actions'] ;
  data:any  ;
  test: any;

  tableColumns: Array<Column> = [
    {
      columnDef: 'idPremierCopie',
      header: 'N° Première Copie',
      cell: (element: Record<string, any>) => `${element['idPremierCopie']}`
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: Record<string, any>) => `${element['description']}`,
      isLink: true,
      url: 'abc'
    },
    {
      columnDef: 'mention',
      header: 'Mention',
      cell: (element: Record<string, any>) => `${element['mention']}`
    },
    {
      columnDef: 'DatePremiereCopie',
      header: 'Date Copie',
      cell: (element: Record<string, any>) => `${element['datePremierCopie']}`
    }
  ];

  tableData:any = [];
  
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
     this.tableData = data;
   console.log(this.tableData)
    })

    
  }


  showRow(element: any) {
    console.log('Edit row', element);
  }
  
  editRow(element: any) {
    console.log('Edit row', element);
  }

  deleteRow() {
    console.log('Delete row');
  }
  
  edit(idPremiereCopie: number){
    alert(idPremiereCopie);
  }

}


