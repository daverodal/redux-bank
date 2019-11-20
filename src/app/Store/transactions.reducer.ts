import {DEPOSIT, SET_TRANSACTIONS, TransactionsActions, WITHDRAW} from './transactions.actions';

export interface State {
  transactions: number[];
}

export interface AppState {
  transactions: State;
}

export const initialState: State = {
 transactions: []
};

export function transactionsReducer(state = initialState, action: TransactionsActions) {
  switch (action.type) {
    case DEPOSIT:
      return {...state,
        transactions: [...state.transactions, action.payload]};

    case WITHDRAW:
      return {...state,
        transactions: [...state.transactions, 0 - action.payload]};

    case SET_TRANSACTIONS:
      return {...state,
        transactions: [...action.payload]};
    default:
      return state;
  }
}
