import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelibataireAddComponent } from './celibataire-add.component';

describe('CelibataireAddComponent', () => {
  let component: CelibataireAddComponent;
  let fixture: ComponentFixture<CelibataireAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelibataireAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelibataireAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
