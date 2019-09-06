import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtmRoutingModule } from './atm-routing.module';
import { AtmComponent } from './atm.component';
import { TransactionsHistoryModule } from '../transactions-history/transactions-history.module';


@NgModule({
  declarations: [AtmComponent],
  imports: [
    CommonModule,
    AtmRoutingModule,
    TransactionsHistoryModule
  ],
  exports: [AtmComponent]
})
export class AtmModule { }
