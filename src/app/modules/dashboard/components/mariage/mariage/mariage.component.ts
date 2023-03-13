import { Component, OnInit } from '@angular/core';
import { MariageService } from '../../../services/mariage.service';

@Component({
  selector: 'app-mariage',
  templateUrl: './mariage.component.html',
  styleUrls: ['./mariage.component.scss']
})
export class MariageComponent implements OnInit {
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
      this.mariage = data.mariages,
      this.size = data.length
      console.log(this.mariage, this.size)
    })
  }
}
