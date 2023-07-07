import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Column } from '../../../models/column';
import { AdoptionService } from '../../../services/adoption.service';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.scss']
})
export class UtilisateurListComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  utilisateur: any;
  users: any;
  id: any;

  size: any = '';

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
      cell: (element: Record<string, any>) => `${element['username']}`,

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

  constructor(public dialog: MatDialog, private utilisateurservice: UtilisateurService, private router: Router) {


  }


  @ViewChild('htmlData') htmlData!: ElementRef;


  ngOnInit(): void {
    this.ListAllUsers(this.size, this.page);
  }

  ListAllUsers(size: number, page: number) {
    this.utilisateurservice.getAllUsers(size, page)
      .subscribe(data => {
        this.tableData = data.users;
        console.log(data.users);

      })
  }

  showRow(element: any) {
    this.router.navigate(['/dashboard/utilisateur-voir', element.id])

  }

  editRow(element: any) {
    this.router.navigate(['/dashboard/utilisateur-edit', element.id])
    // console.log('Edit row', element);
    this.utilisateurservice.updateUser(element, element.id)
      .subscribe(data => {
        this.ListAllUsers(this.size, this.page);

      })
  }

  deleteRow(element: any) {

    this.utilisateurservice.deleteUser(element.id)
      .subscribe(data => {
        this.ListAllUsers(this.size, this.page);
        console.log('Delete row', data);
      })
    // this.dataSource = 

  }


  handlePageChange(event: PageEvent) {
    this.ListAllUsers(event.pageSize, event.pageIndex)
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

