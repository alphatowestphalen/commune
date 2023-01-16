import { TestBed } from '@angular/core/testing';

import { PremiereCopieService } from './premiere-copie.service';

describe('PremiereCopieService', () => {
  let service: PremiereCopieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremiereCopieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
