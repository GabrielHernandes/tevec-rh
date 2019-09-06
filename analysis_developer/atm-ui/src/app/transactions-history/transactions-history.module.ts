import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsHistoryComponent } from './transactions-history.component';


@NgModule({
  declarations: [TransactionsHistoryComponent],
  imports: [
    CommonModule
  ],
  exports: [TransactionsHistoryComponent]
})
export class TransactionsHistoryModule { }
