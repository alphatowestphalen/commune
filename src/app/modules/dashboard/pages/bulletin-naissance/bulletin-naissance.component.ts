import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulletin-naissance',
  templateUrl: './bulletin-naissance.component.html',
  styleUrls: ['./bulletin-naissance.component.scss']
})
export class BulletinNaissanceComponent implements OnInit {
@Input()
bulletin:any

  constructor() { }

  ngOnInit(): void {
  }

}
