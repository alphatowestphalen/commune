import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {
  @Input()
  data: any;
  @Input()
  columnMap: any;
    @Input()
    columns: string[] = [];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.data
  }

  ngAfterViewInit(): void {
     this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
