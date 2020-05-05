import { TestBed } from '@angular/core/testing';

import { CouchService } from './couch.service';

describe('CouchService', () => {
  let service: CouchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
