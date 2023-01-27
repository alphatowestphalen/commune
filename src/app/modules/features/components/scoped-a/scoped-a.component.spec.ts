import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedAComponent } from './scoped-a.component';

describe('ScopedAComponent', () => {
  let component: ScopedAComponent;
  let fixture: ComponentFixture<ScopedAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopedAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScopedAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
