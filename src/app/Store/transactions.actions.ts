import { Action } from '@ngrx/store';

export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';
export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';
export class Deposit implements Action {
  readonly type = DEPOSIT;
  constructor(public payload: number) { }
}
export class Withdraw implements Action {
  readonly type = WITHDRAW;
  constructor(public payload: number) { }
}
export class SetTransactions implements Action {
  readonly type = SET_TRANSACTIONS;
  constructor(public payload: number[]) { }
}
export type TransactionsActions = Withdraw | Deposit | SetTransactions;
