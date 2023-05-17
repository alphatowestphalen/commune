import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionVoirComponent } from './adoption-voir.component';

describe('AdoptionVoirComponent', () => {
  let component: AdoptionVoirComponent;
  let fixture: ComponentFixture<AdoptionVoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionVoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptionVoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
