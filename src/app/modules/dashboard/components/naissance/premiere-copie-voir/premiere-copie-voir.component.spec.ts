import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiereCopieVoirComponent } from './premiere-copie-voir.component';

describe('PremiereCopieVoirComponent', () => {
  let component: PremiereCopieVoirComponent;
  let fixture: ComponentFixture<PremiereCopieVoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiereCopieVoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiereCopieVoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
