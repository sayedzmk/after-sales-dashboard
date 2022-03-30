import { TestBed } from '@angular/core/testing';

import { ManuficturerService } from './manuficturer.service';

describe('ManuficturerService', () => {
  let service: ManuficturerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManuficturerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
