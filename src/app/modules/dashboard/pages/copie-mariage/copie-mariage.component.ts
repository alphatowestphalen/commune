import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-copie-mariage',
  templateUrl: './copie-mariage.component.html',
  styleUrls: ['./copie-mariage.component.scss']
})
export class CopieMariageComponent implements OnInit {
  @Input()
  mariage: any;

  constructor() { }

  ngOnInit(): void {
  }

}
