import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {
  @Input()
  data: any[] = [];
    @Input()
    displayedColumns: any[] = [];
  dataSource = new MatTableDataSource(this.data,);

  constructor() { }

  ngOnInit(): void {
  }

}
