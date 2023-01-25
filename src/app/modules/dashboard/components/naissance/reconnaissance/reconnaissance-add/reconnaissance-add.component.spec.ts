import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconnaissanceAddComponent } from './reconnaissance-add.component';

describe('ReconnaissanceAddComponent', () => {
  let component: ReconnaissanceAddComponent;
  let fixture: ComponentFixture<ReconnaissanceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReconnaissanceAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReconnaissanceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
