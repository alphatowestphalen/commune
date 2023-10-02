/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CelibataireShowComponent } from './celibataire-show.component';

describe('CelibataireShowComponent', () => {
  let component: CelibataireShowComponent;
  let fixture: ComponentFixture<CelibataireShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelibataireShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelibataireShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
