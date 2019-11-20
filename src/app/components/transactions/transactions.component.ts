import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {from, Observable, of} from 'rxjs';
import {Deposit, Withdraw} from '../../Store/transactions.actions';
import {filter, map, pluck, reduce} from 'rxjs/operators';
import * as _ from 'lodash';
import {AppState} from '../../Store/transactions.reducer';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions: Observable< number[]>;
  balance: Observable<number>;
  withdrawls: Observable<number[]>;
  deposits: Observable<number[]>;
  constructor(private store: Store<AppState>) {
  }
  ngOnInit() {
    /* @ts-ignore */
    this.transactions = this.store.select('transactions').pipe(pluck('transactions'));

    // const start = of(1,2,3)
    this.balance = this.transactions.pipe( map((items) => {
      const value = _.sum(items);
      return value;
    }));
    this.withdrawls = this.transactions.pipe(map((items) => {
      const retItems =  items.filter( item =>{
          if (item < 0){
            return true;
          }
          return false;
      });
      return retItems;
    }));

    this.deposits = this.transactions.pipe( map((items) => {
      const retItems =  items.filter( item =>{
        if (item >= 0){
          return true;
        }
        return false;
      });
      return retItems;
    }));

    this.transactions.subscribe((item) => {
    });
  }

  deposit() {
    this.store.dispatch(new Deposit(300));
  }
  withdraw() {
    this.store.dispatch(new Withdraw(500));
  }
}
