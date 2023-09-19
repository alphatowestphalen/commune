/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ObjectMariageService } from './ObjectMariage.service';

describe('Service: ObjectMariage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjectMariageService]
    });
  });

  it('should ...', inject([ObjectMariageService], (service: ObjectMariageService) => {
    expect(service).toBeTruthy();
  }));
});
