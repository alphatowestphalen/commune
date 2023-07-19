import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecesAddComponent } from './deces-add.component';

describe('DecesAddComponent', () => {
  let component: DecesAddComponent;
  let fixture: ComponentFixture<DecesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
