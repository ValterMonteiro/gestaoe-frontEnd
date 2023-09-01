import { TestBed } from '@angular/core/testing';

import { GestaoE_Service } from './gestaoe-back-end.service';

describe('GestaoE_Service', () => {
  let service: GestaoE_Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestaoE_Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
