import { itemsReducer } from './reducers/items.reducers';
import { ActivatedRoute } from '@angular/router';
import { ActionReducerMap } from '@ngrx/store';
import { ItemState } from './../shared/components/interfaces/item.state';
export interface AppState {
  items: ItemState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  items: itemsReducer,
};
