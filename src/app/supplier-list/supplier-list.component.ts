import { Component, OnInit } from '@angular/core';

import { ComicStockService } from '../comic-stock.service';
import { Supplier } from '../supplier';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  constructor(private comicStockService: ComicStockService) { }

  ngOnInit() {
    this.getSuppliers();
  }

  selectedSupplier: Supplier;

  newSupplier: Supplier = new Supplier();

  suppliers: Supplier[];

  getSuppliers(): void {
    this.comicStockService
      .getSuppliers()
      .subscribe(x => this.suppliers = x);
  }

  setSupplier(supplier: Supplier): void {
    this.selectedSupplier = { name: supplier.name, id: supplier.id };
  };

  update(): void {
    debugger;
    //post to api here
  }

  delete(): void {
    debugger;
    //post to api here
  }
}
