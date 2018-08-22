import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { IssueListComponent } from './issue-list/issue-list.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    SupplierListComponent,
    SupplierDetailComponent,
    IssueListComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
