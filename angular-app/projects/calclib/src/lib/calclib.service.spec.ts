import { TestBed } from '@angular/core/testing';

import { CalclibService } from './calclib.service';

describe('CalclibService', () => {
  let service: CalclibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalclibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
