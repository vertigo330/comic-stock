import { TestBed, inject } from '@angular/core/testing';

import { ComicStockService } from './comic-stock.service';

describe('ComicStockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComicStockService]
    });
  });

  it('should be created', inject([ComicStockService], (service: ComicStockService) => {
    expect(service).toBeTruthy();
  }));
});
