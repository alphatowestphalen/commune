import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaissanceAddComponent } from './naissance-add.component';

describe('NaissanceAddComponent', () => {
  let component: NaissanceAddComponent;
  let fixture: ComponentFixture<NaissanceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaissanceAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaissanceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
