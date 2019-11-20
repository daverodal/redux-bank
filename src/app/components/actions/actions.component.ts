import {Component, OnInit} from '@angular/core';
import {Deposit, SetTransactions, Withdraw} from '../../Store/transactions.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../Store/transactions.reducer';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
  }

  deposit() {
    this.store.dispatch(new Deposit(300));
  }
  withdraw() {
    this.store.dispatch(new Withdraw(500));
  }

  clearHistory() {
    // this.account.clearHistory();
    this.store.dispatch(new SetTransactions([]));

  }
}
