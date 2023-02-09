import { Component, Input, OnInit } from '@angular/core';
import { Copie } from '../../models/copie';

@Component({
  selector: 'app-copie',
  templateUrl: './copie.component.html',
  styleUrls: ['./copie.component.scss']
})
export class CopieComponent implements OnInit {
  @Input()
  copie: any;

  constructor() { }

  ngOnInit(): void {
  
  }

}
