import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurVoirComponent } from './utilisateur-voir.component';

describe('UtilisateurVoirComponent', () => {
  let component: UtilisateurVoirComponent;
  let fixture: ComponentFixture<UtilisateurVoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurVoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateurVoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
