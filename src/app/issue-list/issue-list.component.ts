import { Component, OnInit } from '@angular/core';

import { Issue } from '../issue'
import { ISSUES } from '../issue-data';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedIssue: Issue;

  issues: Issue[] = ISSUES;

  placeOrder(issue: Issue): void {
    this.selectedIssue = issue;
  }
}
