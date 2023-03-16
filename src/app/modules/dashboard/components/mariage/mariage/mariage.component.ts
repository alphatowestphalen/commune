import { Component, OnInit } from '@angular/core';
import { Column } from '../../../models/column';
import { MariageService } from '../../../services/mariage.service';

@Component({
  selector: 'app-mariage',
  templateUrl: './mariage.component.html',
  styleUrls: ['./mariage.component.scss']
})
export class MariageComponent implements OnInit {



  tableColumns: Array<Column> = [
    {
      columnDef: 'idPremierCopie',
      header: 'N° Première Copie',
      cell: (element: Record<string, any>) => `${element['idPremierCopie']}`
    },
    {
      columnDef: 'descriptionRow',
      header: 'Description',
      cell: (element: Record<string, any>) => `${element['descriptionRow']} `,
    
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
mariage: any = [];
size: any ='';
page = 0;
  constructor(private mariageservice: MariageService) { }

  ngOnInit(): void {
this.AllListMariages(this.size, this.page)
  }

  AllListMariages(size: number, page: number){
    this.mariageservice.getAllMariage(page, size)
    .subscribe(data=>{
      this.tableData = data.mariages,
      this.size = data.length
      console.log(this.mariage, this.size)
    })
  }
}
