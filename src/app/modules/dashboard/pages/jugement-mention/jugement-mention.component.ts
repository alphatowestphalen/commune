import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugement-mention',
  templateUrl: './jugement-mention.component.html',
  styleUrls: ['./jugement-mention.component.scss']
})
export class JugementMentionComponent implements OnInit {
  @Input()
  jugement:any

  constructor() { }

  ngOnInit(): void {
  }

}
