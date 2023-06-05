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
      columnDef: 'Date Enregistrement',
      header: 'Date Enregistrement',
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
    this.getAllDeces(this.page, this.size);
  }

  getAllDeces(page:number, size:number){
    this.decesservice.getAllDeces(page,size).subscribe(data=>{
      this.tableData = data.deces
      console.log(this.tableData)
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
