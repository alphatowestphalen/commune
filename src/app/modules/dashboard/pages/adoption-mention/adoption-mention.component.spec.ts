import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionMentionComponent } from './adoption-mention.component';

describe('AdoptionMentionComponent', () => {
  let component: AdoptionMentionComponent;
  let fixture: ComponentFixture<AdoptionMentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptionMentionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptionMentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
