import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mention',
  templateUrl: './mention.component.html',
  styleUrls: ['./mention.component.scss']
})
export class MentionComponent implements OnInit {
  @Input()

  mention: any;


  constructor() { }

  ngOnInit(): void {
  }

}
