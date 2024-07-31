import { TestBed } from '@angular/core/testing';

import { WindowWithService } from './window-with.service';

describe('WindowWithService', () => {
  let service: WindowWithService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowWithService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
