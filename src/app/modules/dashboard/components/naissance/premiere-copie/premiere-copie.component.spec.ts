import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiereCopieComponent } from './premiere-copie.component';

describe('PremiereCopieComponent', () => {
  let component: PremiereCopieComponent;
  let fixture: ComponentFixture<PremiereCopieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiereCopieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiereCopieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
