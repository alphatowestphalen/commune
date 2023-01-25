import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionAddComponent } from './adoption-add.component';

describe('AdoptionAddComponent', () => {
  let component: AdoptionAddComponent;
  let fixture: ComponentFixture<AdoptionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
