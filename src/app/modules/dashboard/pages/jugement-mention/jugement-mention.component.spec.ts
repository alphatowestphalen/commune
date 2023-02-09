import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugementMentionComponent } from './jugement-mention.component';

describe('JugementMentionComponent', () => {
  let component: JugementMentionComponent;
  let fixture: ComponentFixture<JugementMentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugementMentionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugementMentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
