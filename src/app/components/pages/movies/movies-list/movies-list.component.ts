import { AppState } from './../../../../state/app.state';
import {
  selectLoading,
  selectListItems,
} from './../../../../state/selectors/items.selector';
import {
  loadItems,
  loadedItems,
} from './../../../../state/actions/items.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  catchError,
  filter,
  map,
  Observable,
  Subject,
  take,
  tap,
  of,
  pipe,
} from 'rxjs';

import { MovieInterface } from '@shared/components/interfaces/movie.interface';
import { MoviesService } from '@shared/services/movies.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit, OnDestroy {
  movies: MovieInterface[] = [];
  public pageNum = 1;
  public totalPages = 0;
  private query: string = '';

  isLoaded: boolean = false;
  error$ = new Subject<boolean>();
  selected: string = 'title';

  loading$: Observable<boolean> = new Observable();
  movies$: Observable<any> = new Observable();
  $test!: Observable<any[]>;
  constructor(
    private moviesSvc: MoviesService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadItems());
    this.movies$ = this.store.select(selectListItems);
    this.getData();
    // this.getDataFromService();
  }

  private getDataFromService() {
    this.moviesSvc
      .searchMovies(this.query, this.pageNum)
      .pipe(
        catchError((err) => {
          console.error(err?.['message']);
          this.error$.next(true);
          return of();
        }),
        tap(console.log),
        map((value: any) => {
          this.totalPages = value['total_pages'];
          return value['results'];
        }),
        tap(console.log),
        take(1)
      )
      .subscribe({
        next: (resp: any) => {
          setTimeout(() => {
            this.isLoaded = true;
            if (resp.length) {
              this.store.dispatch(loadedItems({ items: resp }));
              this.movies$ = this.store.select(selectListItems);
              this.movies = resp;
            }
          }, 1000);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
      });
  }

  getData() {
    return this.movies$.subscribe({
      next: (resp: any) => {
        setTimeout(() => {
          this.isLoaded = true;
          if (resp.length) {
            this.movies = resp;
          }
        }, 1000);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }
  onClickNextPage() {
    this.pageNum++;
    this.getDataFromService();
  }

  onClickPrevPage() {
    this.pageNum--;
    this.getDataFromService();
  }

  onChange(valor: any) {
    switch (valor) {
      case 'title':
        var byTitle = this.movies.slice(0);
        byTitle.sort((a: MovieInterface, b: MovieInterface) => {
          var x = a.title;
          var y = b.title;
          return x < y ? -1 : x > y ? 1 : 0;
        });
        this.movies = byTitle;
        break;
      case 'rate':
        var byRating = this.movies.slice(0);
        byRating.sort((a: MovieInterface, b: MovieInterface) => {
          var x = a.vote_average;
          var y = b.vote_average;
          return x < y ? 1 : x > y ? -1 : 0;
        });
        this.movies = byRating;
        break;
      case 'release_date':
        var byDate = this.movies.slice(0);
        byDate.sort((a: MovieInterface, b: MovieInterface) => {
          var x = a.release_date;
          var y = b.release_date;
          return x < y ? 1 : x > y ? -1 : 0;
        });
        this.movies = byDate;
        break;
      case 'popularity':
        var byDate = this.movies.slice(0);
        byDate.sort((a: MovieInterface, b: MovieInterface) => {
          var x = a.popularity;
          var y = b.popularity;
          return x < y ? 1 : x > y ? -1 : 0;
        });
        this.movies = byDate;
        break;
    }
  }

  ngOnDestroy(): void {
    this.movies$.subscribe();
  }
}
