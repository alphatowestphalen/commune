import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariageVoirComponent } from './mariage-voir.component';

describe('MariageVoirComponent', () => {
  let component: MariageVoirComponent;
  let fixture: ComponentFixture<MariageVoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MariageVoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MariageVoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
