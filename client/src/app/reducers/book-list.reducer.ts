import { Action } from '@ngrx/store';
import { BookInfo } from '../../typings/BookInfo';
import { BookListState } from '../../typings/BookListState';

export const SET_LIST = 'SET_LIST';
export const IS_LOADING = 'IS_LOADING';

export class SetList implements Action {
  readonly type = SET_LIST;

  constructor(public payload: BookInfo[]) {}
}

export class SetIsLoading implements Action {
  readonly type = IS_LOADING;
}

const defaultState: BookListState = {
  books: [],
  isLoading: false,
  error: null,
};

export function bookListReducer(
  state = defaultState,
  action: AllActions
): BookListState {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        books: action.payload,
        isLoading: false,
      };

    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
}

export type AllActions = SetList | SetIsLoading;
