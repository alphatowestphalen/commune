import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMariageComponent } from './table-mariage.component';

describe('TableMariageComponent', () => {
  let component: TableMariageComponent;
  let fixture: ComponentFixture<TableMariageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMariageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMariageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
