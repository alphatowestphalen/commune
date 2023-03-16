import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adoption-mention',
  templateUrl: './adoption-mention.component.html',
  styleUrls: ['./adoption-mention.component.scss']
})
export class AdoptionMentionComponent implements OnInit {
@Input()
adoption:any

  constructor() { }

  ngOnInit(): void {
  }

}
