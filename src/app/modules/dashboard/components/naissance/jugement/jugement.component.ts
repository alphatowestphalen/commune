import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Nft } from '../../../models/nft';

@Component({
  selector: 'app-jugement',
  templateUrl: './jugement.component.html',
  styleUrls: ['./jugement.component.scss']
})
export class JugementComponent implements OnInit {
  public activeAuction: Nft[] = [];
  displayedColumns = [
    'id',
    'name',
    'datenaiss',
    'dateenregistrement',
    'actions',
  ];
  dataSource: MatTableDataSource<UserData>;
  constructor( public dialog: MatDialog) {
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) {
      users.push(createNewUser(i));
    }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  
  } 
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('htmlData') htmlData!: ElementRef;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.displayedColumns;
    this.dataSource;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    FIRSTNAMES[Math.round(Math.random() * (NAMES.length - 1))];
  const date =
    DATE[Math.round(Math.random() * (DATE.length - 1))] +
    '/' +
    DATE[Math.round(Math.random() * (DATE.length - 1))] +
    '/' +
    YEAR[Math.round(Math.random() * (YEAR.length - 1))];
  const color =
    DATE[Math.round(Math.random() * (DATE.length - 1))] +
    '/' +
    DATE[Math.round(Math.random() * (DATE.length - 1))] +
    '/' +
    '2022';

  return {
    id: id.toString(),
    name: name,
    datenaiss: date,
    dateenregitrement: color,
  };
}

/** Constants used to fill up our data base. */
const DATE = [
  '01',
  '02',
  '03',
  '04',
  '04',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
];
const YEAR = [
  '2000',
  '2001',
  '2002',
  '2003',
  '2010',
  '2011',
  '2013',
  '2006',
  '2020',
  '2022',
];
const FIRSTNAMES = [
  'Jean',
  'Gregoire',
  'Louis',
  'Matteao',
  'Santos',
  'Law',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];
const NAMES = [
  'RAZANANDRAINY',
  'RAKOTONIRINA',
  'ANDRINIAINA',
  'RAHARAVELO',
  'RAKOTOMAMONJY',
  'RANDRIANANTENAINA',
  'ZAFIMAHALEO',
  'SEHENONINAINA',
  'NANTENAINA',
  'TONGASOA',
];

export interface UserData {
  id: string;
  name: string;
  datenaiss: string;
  dateenregitrement: string;
}
