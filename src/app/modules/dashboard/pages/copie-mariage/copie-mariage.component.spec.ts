import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopieMariageComponent } from './copie-mariage.component';

describe('CopieMariageComponent', () => {
  let component: CopieMariageComponent;
  let fixture: ComponentFixture<CopieMariageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopieMariageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopieMariageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
