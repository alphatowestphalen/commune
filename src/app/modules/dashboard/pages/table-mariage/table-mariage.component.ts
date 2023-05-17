import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Column } from '../../models/column';

@Component({
  selector: 'app-table-mariage',
  templateUrl: './table-mariage.component.html',
  styleUrls: ['./table-mariage.component.scss']
})
export class TableMariageComponent implements OnInit {

  @Input()
  tableColumns: Array<Column> = [];

  @Input()
  tableData: any = [];

  @Input()
  search: any = "";

  @Output() editEvent = new EventEmitter<any>();
  @Output() showEvent = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() askEvent = new EventEmitter<any>();

 
  @Output() pageChange = new EventEmitter<PageEvent>();


  displayedColumns: Array<string> = [];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;






  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.filter = this.search
  }

  ngAfterViewInit(): void {
     this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  AskRow(element: any){
    console.log(element);
  }

  editRow(element: any) {
    this.editEvent.emit(element);
  }
  
  showRow(element: any) {
    this.showEvent.emit(element);
  }

  deleteRow(element: any) {
    this.deleteEvent.emit(element);
  }

 ngOnChanges(change: any){

  this.dataSource.filter = change.search.currentValue.toLowerCase();
  
 }

 onAskEvent(parameter: any) {
  console.log('Ask event clicked with parameter:', parameter);
}

}
