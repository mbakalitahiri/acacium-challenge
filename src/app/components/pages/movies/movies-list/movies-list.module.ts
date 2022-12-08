import { RatingModule } from './../rating/rating.module';
import { CommonModule } from '@angular/common';
import { MoviesDetailsModule } from './../movies-details/movies-details.module';
import { MoviesListComponent } from './movies-list.component';
import { MoviesListRoutingModule } from './movies-list-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MoviesListComponent],
  imports: [
    CommonModule,
    MoviesListRoutingModule,
    MoviesDetailsModule,
    RatingModule,
    FormsModule,
  ],
  exports: [MoviesListComponent],
})
export class MoviesListModule {}
