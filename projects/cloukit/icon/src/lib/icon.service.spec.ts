import { TestBed, inject } from '@angular/core/testing';

import { CloukitIconService } from './icon.service';

describe('CloukitIconService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloukitIconService]
    });
  });

  it('should be created', inject([CloukitIconService], (service: CloukitIconService) => {
    expect(service).toBeTruthy();
  }));
});
