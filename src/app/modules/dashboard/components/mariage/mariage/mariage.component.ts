import { Component, OnInit } from '@angular/core';
import { Column } from '../../../models/column';
import { MariageService } from '../../../services/mariage.service';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-mariage',
  templateUrl: './mariage.component.html',
  styleUrls: ['./mariage.component.scss']
})
export class MariageComponent implements OnInit {



  tableColumns: Array<Column> = [
    {
      columnDef: 'Numèro Mariage',
      header: 'Numèro',
      cell: (element: Record<string, any>) => `${element['idMariage'] }`
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
      columnDef: 'Date et Heure de Mariage',
      header: 'Date et Heure Mariage',
     cell: (element: Record<string, any>) => {
        const datenaissEnfant = element['dateMariage'];
        const HeurEnfant = element['heureMariage'];
        // const dateObj = new Date(datenaissEnfant);
        // const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;
        return `${datenaissEnfant} ${HeurEnfant}`;
      }
    }
  ];

tableData: any = [];
mariage: any = [];
size= 5;
page = 1;
  constructor(private mariageservice: MariageService, private router:Router,public translocoService: TranslocoService) { }

  ngOnInit(): void {
    this.AllListMariages(this.size, this.page)
  }

  AllListMariages(size: number, page: number){
    this.mariageservice.getAllMariage(size, page)
    .subscribe(data=>{
      console.log('================AllListMariages====================');
      console.log(data);
      console.log('====================================');
      this.tableData = data.data,
      this.size = data.length
    })
  }

  showRow(element: any) {
    this.router.navigate(['/dashboard/mariage-show', element.idMariage])

  }

  switchLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
    location.reload();
  }

  editRow(element: any) {
  }

  deleteRow(element: any){

  }

  getAllService(){
    this.mariageservice.getAllMariage(this.page, this.size).subscribe(data=>{
      console.log('====================================');
      console.log(data);
      console.log('====================================');
    })
  }
}
