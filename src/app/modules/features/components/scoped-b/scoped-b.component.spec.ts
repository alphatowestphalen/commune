import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedBComponent } from './scoped-b.component';

describe('ScopedBComponent', () => {
  let component: ScopedBComponent;
  let fixture: ComponentFixture<ScopedBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScopedBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScopedBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
