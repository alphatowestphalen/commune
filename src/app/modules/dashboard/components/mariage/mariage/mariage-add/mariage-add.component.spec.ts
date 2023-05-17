import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariageAddComponent } from './mariage-add.component';

describe('MariageAddComponent', () => {
  let component: MariageAddComponent;
  let fixture: ComponentFixture<MariageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MariageAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MariageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
