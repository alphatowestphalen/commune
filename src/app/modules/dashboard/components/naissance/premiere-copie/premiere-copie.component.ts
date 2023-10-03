import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { PremiereCopieService } from '../../../services/premiere-copie.service';
import { Column } from '../../../models/column';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-premiere-copie',
  templateUrl: './premiere-copie.component.html',
  styleUrls: ['./premiere-copie.component.scss']
})
export class PremiereCopieComponent implements OnInit {

  formatDateString(dateStr: string): string {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const day = parts[2];
      const month = parts[1];
      const year = parts[0];
      return `${day}/${month}/${year}`;
      // return `${year}-${month}-${day}`;
    } else {
      return 'Invalid Date';
    }
  }
  tableColumns: Array<Column> = [
    {
      columnDef: 'idPremierCopie',
      header: 'N° Première Copie',
      cell: (element: Record<string, any>) => {
        const idPremierCopie  = element['idPremierCopie']
        const numPremierCopie = idPremierCopie.slice(0,-4)
        return `${numPremierCopie}`
      },
    },
    {
      columnDef: 'descriptionRow',
      header: 'Nom et Prènoms',
      cell: (element: Record<string, any>) => {
        const nomEnfant = element['enfant']['nomEnfant']
        const prenomEnfant = element['enfant']['prenomsEnfant']
        const NomEnfant = nomEnfant.toUpperCase()
        return `${NomEnfant} ${prenomEnfant}`
      },

    },
    {
      columnDef: 'datenaiss',
      header: 'Date et Heure de Naissance',
      cell: (element: Record<string, any>) => {
        const datenaissEnfant = element['enfant']['datenaissEnfant'];
        const heurenaissEnfant = element['enfant']['heurenaissEnfant'];
        const dateObj = new Date(`${datenaissEnfant}T${heurenaissEnfant}:00`); 
        const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;
        const formattedTime = `${dateObj.getHours().toString().padStart(2, '0')}:${dateObj.getMinutes().toString().padStart(2, '0')}`;
        return `${formattedDate} ${formattedTime}`;
      }
    },
    {
      columnDef: 'DatePremiereCopie',
      header: 'Date Création Copie',

      cell: (element: Record<string, any>) => {
        const dateDMY = this.formatDateString(element['datePremierCopie']);
        const datenaissEnfant = dateDMY;
        // const dateObj = new Date(datenaissEnfant);
        // const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;
        // return formattedDate;
        return datenaissEnfant;
      }
    }
  ];

  tableData: any = [];

  showModal = false;

  size = 10;
  page = 1;

  search: any = "";


  constructor(private router: Router, public dialog: MatDialog, private premierecopieservice: PremiereCopieService) {
  }


  @ViewChild('htmlData') htmlData!: ElementRef;



  ngOnInit(): void {
    // this.getAllfirstCertificates();
    this.getfirstCertificates(this.size, this.page)
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    if(filterValue){
      this.getSearchfirstCertificates(filterValue)
    }else{
      this.getfirstCertificates(this.size, this.page)
    }
  }
  openDialog() {
    this.dialog.open(PremiereCopieComponent);
    this.getfirstCertificates(this.size, this.page)
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }



  getfirstCertificates(size: number, page: number) {
    this.premierecopieservice.getCertificates(size, page)
      .subscribe(data => {
        this.tableData = data.data;
        this.tableData.map((d: any) => {
          d.descriptionRow = d.enfant.nomEnfant + ' ' + d.enfant.prenomsEnfant
        })
      })
  }

  getSearchfirstCertificates(query:string) {
    this.premierecopieservice.getSearchCertificates(this.size, this.page, query)
      .subscribe(data => {
        this.tableData = data.data;
        this.tableData.map((d: any) => {
          d.descriptionRow = d.enfant.nomEnfant + ' ' + d.enfant.prenomsEnfant
        })
      })
  }


  showRow(element: any) {
    console.log(element);
    
    this.router.navigate(['/dashboard/premiere-copie-voir', element.idPremierCopie])

  }

  editRow(element: any) {
    console.log('Edit row', element);
    this.premierecopieservice.updateCertificate(element.idPremierCopie, element)
      .subscribe(data => {
        this.getfirstCertificates(this.size, this.page)

      })
  }

  deleteRow(element: any) {
    this.premierecopieservice.deleteCertificate(element.idPremierCopie)
      .subscribe(data => {
        this.getfirstCertificates(this.size, this.page)
        console.log('Delete row', data);
      })

  }


  handlePageChange(event: PageEvent) {
    console.log(event)
    // this.size = event.pageSize
    this.getfirstCertificates(event.pageSize, event.pageIndex)
  }

}


