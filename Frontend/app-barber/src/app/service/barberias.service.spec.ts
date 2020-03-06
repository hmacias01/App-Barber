import { TestBed } from '@angular/core/testing';

import { BarberiasService } from './barberias.service';

describe('BarberiasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarberiasService = TestBed.get(BarberiasService);
    expect(service).toBeTruthy();
  });
});
