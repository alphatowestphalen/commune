import { Component, OnInit } from '@angular/core';
import { DecesService } from '../../../services/deces.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deces-list',
  templateUrl: './deces-list.component.html',
  styleUrls: ['./deces-list.component.scss']
})
export class DecesListComponent implements OnInit {

  tableColumns: Array<any> = [
    {
      columnDef: 'Numèro Mariage',
      header: 'Numèro',
      cell: (element: Record<string, any>) => `${element['numero'] }`
    },
    {
      columnDef: 'Nom et Prènoms Homme',
      header: 'Nom et Prènoms Homme',
        cell: (element: Record<string, any>) => {
        const nomEnfant = element['homme']['nomHomme']
        const prenomEnfant = element['homme']['prenomsHomme']
        const NomEnfant = nomEnfant.toUpperCase()
        return `${NomEnfant} ${prenomEnfant}`
      },
    },
    {
      columnDef: 'Nome et Prènoms Femme',
      header: 'Nome et Prènoms Femme',
      cell: (element: Record<string, any>) => {
        const NomFemme = element['femme']['nomFemme']
        const prenomsFemme = element['femme']['prenomsFemme']
        const Nomfemme = NomFemme.toUpperCase()
        return `${Nomfemme} ${prenomsFemme}`
      },
    },
    {
      columnDef: 'Date et Heure Mariage',
      header: 'Date et Heure Mariage',
     cell: (element: Record<string, any>) => {
        const datenaissEnfant = element['createdDate'];
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
  }

  getAllDeces(page:number, size:number){
    this.decesservice.getAllDeces(page,size).subscribe(data=>{
      this.tableData = data.deces
    })
  }
  showRow(element: any) {
    this.router.navigate(['/dashboard/mariage-show', element.idMariage])

  }

  editRow(element: any) {
  }

  deleteRow(element: any){

  }
}
