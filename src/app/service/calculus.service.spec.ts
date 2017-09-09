import { TestBed, inject } from '@angular/core/testing';

import { CalculusService } from './calculus.service';

describe('CalculusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculusService]
    });
  });

  it('should be created', inject([CalculusService], (service: CalculusService) => {
    expect(service).toBeTruthy();
  }));
});
