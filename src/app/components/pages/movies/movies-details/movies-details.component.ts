import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, Observable, Subject, switchMap, take } from 'rxjs';

import { MovieInterface } from './../../../../shared/components/interfaces/movie.interface';
import { MoviesService } from './../../../../shared/services/movies.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss'],
})
export class MoviesDetailsComponent implements OnInit {
  movie$!: Observable<MovieInterface>;
  error$ = new Subject<boolean>();
  relatedMovies!: MovieInterface[];

  constructor(
    private activated: ActivatedRoute,
    private moviesSvc: MoviesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activated.params
      .pipe(
        map((value: Params) => {
          this.movie$ = this.moviesSvc.getDetails(value['id']);
          return value['id'];
        }),
        switchMap((value: any) => {
          return this.moviesSvc.getSimilar(value);
        }),

        take(1)
      )
      .subscribe({
        next: (v: any) => (this.relatedMovies = v?.['results']),
        error: (e) => console.error(e),
        complete: () => console.info('complete'),
      });
  }

  navigateTo(id: number) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['movies-details/', id]));
  }
}
