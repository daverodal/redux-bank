import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { transactionsReducer } from './Store/transactions.reducer';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ActionsComponent } from './components/actions/actions.component';
import {BalanceComponent} from './components/balance/balance.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    ActionsComponent,
    BalanceComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({transactions: transactionsReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 100
    })  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
