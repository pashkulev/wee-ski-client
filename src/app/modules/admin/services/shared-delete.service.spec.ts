import { TestBed, inject } from '@angular/core/testing';

import { SharedDeleteService } from './shared-delete.service';

describe('SharedDeleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedDeleteService]
    });
  });

  it('should be created', inject([SharedDeleteService], (service: SharedDeleteService) => {
    expect(service).toBeTruthy();
  }));
});
