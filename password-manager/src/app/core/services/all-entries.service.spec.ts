import { TestBed } from '@angular/core/testing';

import { AllEntriesService } from './all-entries.service';

describe('AllEntriesService', () => {
  let service: AllEntriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllEntriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
