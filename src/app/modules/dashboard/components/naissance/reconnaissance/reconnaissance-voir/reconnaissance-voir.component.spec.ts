import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconnaissanceVoirComponent } from './reconnaissance-voir.component';

describe('ReconnaissanceVoirComponent', () => {
  let component: ReconnaissanceVoirComponent;
  let fixture: ComponentFixture<ReconnaissanceVoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReconnaissanceVoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReconnaissanceVoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
