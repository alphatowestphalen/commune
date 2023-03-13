import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelibataireComponent } from './celibataire.component';

describe('CelibataireComponent', () => {
  let component: CelibataireComponent;
  let fixture: ComponentFixture<CelibataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelibataireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelibataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
