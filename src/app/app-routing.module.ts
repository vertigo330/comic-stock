import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { IssueListComponent } from './issue-list/issue-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/suppliers', pathMatch: 'full' },
    { path: 'suppliers', component: SupplierListComponent },
    { path: 'supplier', component: SupplierDetailComponent },
    { path: 'issues', component: IssueListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
