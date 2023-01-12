import { TestBed } from '@angular/core/testing';

import { ProductHtppService } from './product-htpp.service';

describe('ProductHtppService', () => {
  let service: ProductHtppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductHtppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
