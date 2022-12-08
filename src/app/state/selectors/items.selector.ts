import { ItemState } from './../../shared/components/interfaces/item.state';
import { AppState } from './../app.state';
import { createSelector } from '@ngrx/store';
import { state } from '@angular/animations';

export const selectItemsFeature = (state: AppState) => state.items;

export const selectListItems = createSelector(
  selectItemsFeature,
  (state: ItemState) => state.items
);

export const selectLoading = createSelector(
  selectItemsFeature,
  (state: ItemState) => state.loading
);
