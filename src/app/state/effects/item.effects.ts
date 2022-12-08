import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from '@app/shared/services/movies.service';
import { map, mergeMap, catchError, EMPTY, tap } from 'rxjs';

@Injectable()
export class ItemEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Item List] Load Items'),
      mergeMap(() =>
        this.movieSvc.searchMovies().pipe(
          tap(console.log),
          map((items) => ({
            type: '[Item List] Loaded Success',
            items: items['results'],
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
  constructor(private actions$: Actions, private movieSvc: MoviesService) {}
}
