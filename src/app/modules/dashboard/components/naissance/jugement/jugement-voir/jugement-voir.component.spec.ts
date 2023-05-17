import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugementVoirComponent } from './jugement-voir.component';

describe('JugementVoirComponent', () => {
  let component: JugementVoirComponent;
  let fixture: ComponentFixture<JugementVoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugementVoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugementVoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
