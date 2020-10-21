import { TestBed } from '@angular/core/testing';

import { FetchBookInfoService } from './fetch-book-info.service';

describe('FetchBookInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchBookInfoService = TestBed.get(FetchBookInfoService);
    expect(service).toBeTruthy();
  });
});
