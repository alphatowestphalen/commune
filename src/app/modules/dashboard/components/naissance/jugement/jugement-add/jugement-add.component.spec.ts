import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugementAddComponent } from './jugement-add.component';

describe('JugementAddComponent', () => {
  let component: JugementAddComponent;
  let fixture: ComponentFixture<JugementAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugementAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
