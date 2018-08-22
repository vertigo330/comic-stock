import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Supplier } from "../supplier";

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.css']
})
export class SupplierDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  @Input() supplier: Supplier;

}
