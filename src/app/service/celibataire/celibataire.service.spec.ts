import { TestBed } from '@angular/core/testing';

import { CelibataireService } from './celibataire.service';

describe('CelibataireService', () => {
  let service: CelibataireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelibataireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
