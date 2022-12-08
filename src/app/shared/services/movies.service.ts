import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieInterface } from './../components/interfaces/movie.interface';
import { environment } from '@app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _http: HttpClient) {}

  searchMovies(query?: string, page?: number) {
    return this._http.get<MovieInterface[]>(
      `${environment.baseUrlApi}movie/popular?api_key=${environment.api_key}&language=en-US&page=${page}`
    );
  }

  getDetails(id: Number) {
    return this._http.get<MovieInterface>(
      `${environment.baseUrlApi}movie/${id}?api_key=${environment.api_key}&language=en-US`
    );
  }

  getMoviesGenre() {
    return this._http.get<MovieInterface>(
      `${environment.baseUrlApi}genre/movie/list?api_key=${environment.api_key}&language=en-US`
    );
  }

  getSimilar(movieId: number) {
    return this._http.get<MovieInterface>(
      `${environment.baseUrlApi}movie/${movieId}/similar?api_key=${environment.api_key}&language=en-US&page=1`
    );
  }
}
