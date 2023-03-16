import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinNaissanceComponent } from './bulletin-naissance.component';

describe('BulletinNaissanceComponent', () => {
  let component: BulletinNaissanceComponent;
  let fixture: ComponentFixture<BulletinNaissanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletinNaissanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulletinNaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
