import { CommonModule } from '@angular/common';
import { MoviesDetailsModule } from './movies-details/movies-details.module';
import { MoviesListModule } from './movies-list/movies-list.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, MoviesDetailsModule, MoviesListModule],
})
export class MoviesModule {}
