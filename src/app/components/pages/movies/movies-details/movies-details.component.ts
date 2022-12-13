import { MovieInterface } from './../../../../shared/components/interfaces/movie.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, pipe, Subject, switchMap, take, tap, Observable } from 'rxjs';

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
    // alert(id);
    // this.router.navigate(['movies-details/', id]);
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['movies-details/', id]));
  }
}
