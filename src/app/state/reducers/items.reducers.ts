import { ItemState } from './../../shared/components/interfaces/item.state';
import { loadItems, loadedItems } from './../actions/items.actions';
import { MovieInterface } from '@shared/components/interfaces/movie.interface';
import { createReducer, on } from '@ngrx/store';

export const initialState: ItemState = {
  loading: false,
  items: [],
};

export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedItems, (state, { items }) => {
    return { ...state, loading: false, items: items };
  })
);
