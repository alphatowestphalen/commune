import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecesListComponent } from './deces-list.component';

describe('DecesListComponent', () => {
  let component: DecesListComponent;
  let fixture: ComponentFixture<DecesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
