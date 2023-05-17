import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconnaissanceMentionComponent } from './reconnaissance-mention.component';

describe('ReconnaissanceMentionComponent', () => {
  let component: ReconnaissanceMentionComponent;
  let fixture: ComponentFixture<ReconnaissanceMentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReconnaissanceMentionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReconnaissanceMentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
