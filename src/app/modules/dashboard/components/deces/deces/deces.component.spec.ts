import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecesComponent } from './deces.component';

describe('DecesComponent', () => {
  let component: DecesComponent;
  let fixture: ComponentFixture<DecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
