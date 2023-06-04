import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecesShowComponent } from './deces-show.component';

describe('DecesShowComponent', () => {
  let component: DecesShowComponent;
  let fixture: ComponentFixture<DecesShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecesShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
