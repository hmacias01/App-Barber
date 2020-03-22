import { TestBed } from '@angular/core/testing';

import { ReservarcitaService } from './reservarcita.service';

describe('ReservarcitaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservarcitaService = TestBed.get(ReservarcitaService);
    expect(service).toBeTruthy();
  });
});
