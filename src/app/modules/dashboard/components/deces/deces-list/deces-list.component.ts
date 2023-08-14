import { Component, OnInit } from '@angular/core';
import { DecesService } from '../../../services/deces.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-deces-list',
  templateUrl: './deces-list.component.html',
  styleUrls: ['./deces-list.component.scss']
})
export class DecesListComponent implements OnInit {

  tableColumns: Array<any> = [
    {
      columnDef: 'idActeDeces',
      header: 'Numèro',
      cell: (element: Record<string, any>) => `${element['idActeDeces'] }`
    },
    {
      columnDef: 'Nom et Prènoms ',
      header: 'Nom et Prènoms ',
        cell: (element: Record<string, any>) => {
        const nomEnfant = element['premierCopie']['enfant']['nomEnfant']
        const prenomEnfant = element['premierCopie']['enfant']['prenomsEnfant']
        const NomEnfant = nomEnfant.toUpperCase()
        return `${NomEnfant} ${prenomEnfant}`
      },
    },
    {
      columnDef: 'Nome et Prènoms Declarant',
      header: 'Nome et Prènoms',
      cell: (element: Record<string, any>) => {
        const NomFemme = element['nomDeclarant']
        const prenomsFemme = element['prenomsDeclarant']
        const Nomfemme = NomFemme.toUpperCase()
        return `${Nomfemme} ${prenomsFemme}`
      },
    },
    {
      columnDef: 'dateDeces',
      header: 'Date de Deces',
     cell: (element: Record<string, any>) => {
        const datenaissEnfant = element['dateDeces'];
        const dateObj = new Date(datenaissEnfant);
        const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;
        return formattedDate;
      }
    }
  ];
  tableData: any = [];
  mariage: any = [];
  size: any ='';
  page = 0;

  constructor(private decesservice:DecesService, private router:Router) { }
  

  ngOnInit(): void {
    this.getAllDeces(this.page, this.size);
    console.log(this.tableData)
  }

  getAllDeces(page:number, size:number){
    this.decesservice.getAllDeces(page,size).subscribe(data=>{
      this.tableData = data.deces
      console.log(this.tableData)
    })
  }
  showRow(element: any) {
    this.router.navigate(['/dashboard/deces-list', element.idActeDeces])

  }

  editRow(element: any) {
  }

  deleteRow(element: any){

  }
  handlePageChange(event: PageEvent) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.getAllDeces(this.page, this.size);
  }
}
