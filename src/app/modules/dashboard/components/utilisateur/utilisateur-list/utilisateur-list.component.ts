import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Column } from '../../../models/column';
import { AdoptionService } from '../../../services/adoption.service';
import { UtilisateurService } from '../../../services/utilisateur.service';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.scss']
})
export class UtilisateurListComponent implements OnInit {

  utilisateur: any;

  size:any = '';

 page = 0;
 
 search: any;
 
  tableColumns: Array<Column> = [
   {
     columnDef: 'id',
     header: 'N° Enregistrement',
     cell: (element: Record<string, any>) => `${element['id']}`
   },
   {
     columnDef: 'name',
     header: 'Nom Complète',
     cell: (element: Record<string, any>) => `${element['name']} `,
   
   },
   {
    columnDef: 'username',
    header: 'Pseudo Nom',
    cell: (element: Record<string, any>) => `${element ['username']}`,
  
  },
   {
     columnDef: 'phone',
     header: 'N° Téléphone ',
     
     cell: (element: Record<string, any>) => `${element['phone']}`
   },
   {
     columnDef: 'poste',
     header: 'Poste',
     cell: (element: Record<string, any>) => `${element['poste']}`
   }
 ];
 
 tableData: any = [];
 
   constructor( public dialog: MatDialog, private utilisateurservice: UtilisateurService,  private router:Router) {
 
   
   } 
   
 
   @ViewChild('htmlData') htmlData!: ElementRef;
 
 
   ngOnInit(): void {
     this.ListAllUsers(this.size, this.page );
   }

   
   applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
 
   }
 
 
   ListAllUsers(size: number, page: number){
     this.utilisateurservice.getAllUsers(size, page)
     .subscribe(data=>{
       this.tableData = data.users;
     })
   }

   showRow(element: any) {
     this.router.navigate(['/dashboard/adoption-copie-voir', element.idAdoption ])
 
   }
 
   editRow(element: any) {
     console.log('Edit row', element);
     this.utilisateurservice.updateUser( element, element.idAdoption)
       .subscribe(data=> {
         this.ListAllUsers(this.size, this.page );
         
       })
   }
 
   deleteRow(element: any) {
     this.utilisateurservice.deleteUser(element.idAdoption)
       .subscribe(data=> { 
         this.ListAllUsers(this.size, this.page );
         console.log('Delete row', data);
       })
   
   }
 
 
   handlePageChange(event: PageEvent) {
     this.ListAllUsers(event.pageSize, event.pageIndex)
   }

 }

