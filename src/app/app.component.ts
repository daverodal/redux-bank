import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './Store/transactions.reducer';
import {SetTransactions} from './Store/transactions.actions';

function createStore(reducer: any, param2: any) {

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'redux-bank';

  constructor(private store: Store<AppState>){
    const savedTransactions = JSON.parse(localStorage.savedTransactions);
    this.store.dispatch(new SetTransactions(savedTransactions.transactions));
  }
  ngOnInit(){

  }
}
