import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaissanceHomeComponent } from './naissance-home.component';

describe('NaissanceHomeComponent', () => {
  let component: NaissanceHomeComponent;
  let fixture: ComponentFixture<NaissanceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaissanceHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaissanceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
