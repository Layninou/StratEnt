import { TestBed, inject } from '@angular/core/testing';

import { ModelizationService } from './modelization.service';

describe('ModelizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelizationService]
    });
  });

  it('should be created', inject([ModelizationService], (service: ModelizationService) => {
    expect(service).toBeTruthy();
  }));
});
