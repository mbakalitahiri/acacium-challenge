import { MovieInterface } from '@app/shared/components/interfaces/movie.interface';
import { createAction, props } from '@ngrx/store';

export const loadItems = createAction('[Item List] Load Items');

export const loadedItems = createAction(
  '[Item List] Loaded Success',
  props<{ items: any[] }>()
);
