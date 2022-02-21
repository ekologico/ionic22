import { TestBed } from '@angular/core/testing';

import { PalabrickService } from './palabrick.service';

describe('PalabrickService', () => {
  let service: PalabrickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalabrickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
