import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reconnaissance-mention',
  templateUrl: './reconnaissance-mention.component.html',
  styleUrls: ['./reconnaissance-mention.component.scss']
})
export class ReconnaissanceMentionComponent implements OnInit {
@Input()
reconnaissance: any;


  constructor() { }

  ngOnInit(): void {
  }

}
