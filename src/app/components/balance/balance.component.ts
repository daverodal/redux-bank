import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../Store/transactions.reducer';
import {map, pluck} from 'rxjs/operators';
import * as _ from 'lodash';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-balance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  public balance: Observable<number>;
  public isNegative: Observable<boolean>;
  private firstTime = true;
  constructor(private store: Store<AppState>) {

    const transactions = this.store.select('transactions').pipe(pluck('transactions'));

    // const start = of(1,2,3)
    this.balance = transactions.pipe( map((items) => {
      const value = _.sum(items);
      console.log('balance ' + value);

      return value;
    }));
    this.balance.subscribe((item) => {
    });
    this.isNegative = this.balance.pipe(map(item => {
      if (item < 0) {
        return true;
      }
      return false;
    }));
  }
  ngOnInit() {



    this.store.select('transactions').subscribe(item => {
      if (!this.firstTime) {
        localStorage.savedTransactions = JSON.stringify(item);
      }
      this.firstTime = false;
    });

  }
}
