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
  search: any;
  tableColumns: Array<Column> = [
    {
      columnDef: 'idbulletin',
      header: 'N° bulletin Copie',
      cell: (element: Record<string, any>) => `${element['idBulletinNaissance']}`,
    },
    {
      columnDef: 'nom',
      header: 'Nom et Prénoms',
      cell: (element: Record<string, any>) =>
        `${element['nomPersonne']} ${element['prenomsPersonne']}`,
    },
    {
      columnDef: 'dateAdoption',
      header: 'Date de Bulletin  ',
     cell: (element: Record<string, any>) => {
        const datenaissEnfant = element['createdDate'];
        const dateObj = new Date(datenaissEnfant);
        const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;
        return formattedDate;
      }
    },
    {
      columnDef: 'datePremierCopie',
      header: 'Date 1ère Copie',
      cell: (element: Record<string, any>) =>
        `${element['dateCopie']}`,
    },
  ];
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
      this.tableData = data.data 
     console.log('====================================');
     console.log(this.tableData);
     console.log('====================================');
      
    })

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  }

  showRow(element: any) {
    this.router.navigate(['/dashboard/premiere-copie-voir', element.idPremierCopie ])

  }
  handlePageChange(event: PageEvent){
    this.getAllService(event.pageSize, event.pageIndex)
  
  }
  

  // editRow(element: any) {
  //   console.log('Edit row', element);
  //   this.bulletinservice.updateJugement(element.idJugement, element)
  //     .subscribe((data: any)=> {
  //       this.getAllJugements(this.size, this.page)
        
  //     })
  // }

  // deleteRow(element: any) {
  //   this.jugementservice.deleteJugement(element.idJugement)
  //     .subscribe((data: any)=> { 
  //       this.getAllJugements(this.size, this.page)
  //       console.log('Delete row', data);
  //     })
  
  // }



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
