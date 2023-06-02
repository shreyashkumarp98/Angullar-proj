import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('log info', ()=>{
    const actual = service.logInfo('jwt test done')
    const expected='Logged: jwt test done'
    expect(actual).toEqual(expected)
  })
});
