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
    columns: string[] = [];
  dataSource = new MatTableDataSource();

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.data
  }

}
