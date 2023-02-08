import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { PremiereCopieService } from '../../../services/premiere-copie.service';
import { Column } from '../../../models/column';


@Component({
  selector: 'app-premiere-copie',
  templateUrl: './premiere-copie.component.html',
  styleUrls: ['./premiere-copie.component.scss']
})
export class PremiereCopieComponent implements OnInit {

  tableColumns: Array<Column> = [
    {
      columnDef: 'idPremierCopie',
      header: 'N° Première Copie',
      cell: (element: Record<string, any>) => `${element['idPremierCopie']}`
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: Record<string, any>) => `${element['enfant']['nomEnfant']} ${element['enfant']['prenomsEnfant']}`,
    
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

  tableData: any = [];

  showModal = false;
  constructor(private router:Router, public dialog: MatDialog, private premierecopieservice: PremiereCopieService) {
  }


  @ViewChild('htmlData') htmlData!: ElementRef;



  ngOnInit(): void {
    this.getAllfirstCertificates();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    //this.dataSource.filter = filterValue;
  }
  openDialog() {
    this.dialog.open(PremiereCopieComponent);
    this.getAllfirstCertificates();
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  getAllfirstCertificates() {
    this.premierecopieservice.getFirstCertificates()
      .subscribe(data => {
        this.tableData = data;
        console.log(this.tableData)
      })


  }


  showRow(element: any) {
    this.router.navigate(['/dashboard/premiere-copie-voir', element.idPremierCopie ])

  }

  editRow(element: any) {
    console.log('Edit row', element);
    this.premierecopieservice.updateCertificate(element.idPremierCopie, element)
      .subscribe(data=> {
        
      })
  }

  deleteRow(element: any) {
    console.log('Delete row', element);
  }



}


