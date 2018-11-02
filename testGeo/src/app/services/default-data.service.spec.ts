import { TestBed } from '@angular/core/testing';

import { DefaultDataService } from './default-data.service';

describe('DefaultDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefaultDataService = TestBed.get(DefaultDataService);
    expect(service).toBeTruthy();
  });
});
