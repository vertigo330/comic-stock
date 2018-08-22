import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Supplier } from './supplier';
import { Issue } from './issue';
import { SUPPLIERS } from './suppliers-data';

@Injectable({
  providedIn: 'root'
})
export class ComicStockService {

  constructor() { }

  getSuppliers(): Observable<Supplier[]> {
    return of(SUPPLIERS);
  }
}
