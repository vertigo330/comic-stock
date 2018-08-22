import { Component, OnInit, Input } from '@angular/core';

import { SUPPLIERS } from '../suppliers-data';
import { GRADES } from '../grade-data';
import { Supplier } from '../supplier'
import { Issue } from '../issue'
import { Grade } from '../grade'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  suppliers: Supplier[] = SUPPLIERS;

  grades: Grade[] = GRADES;

  @Input() issue: Issue;

  @Input() supplier: Supplier;

  @Input() grade: Grade;
}
