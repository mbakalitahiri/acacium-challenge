import { RatingModule } from './../rating/rating.module';
import { CommonModule } from '@angular/common';
import { MoviesDetailsComponent } from './movies-details.component';
import { MoviesDetailsRoutingModule } from './movies-details-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [MoviesDetailsComponent],
  imports: [CommonModule, MoviesDetailsRoutingModule, RatingModule],
  exports: [MoviesDetailsComponent],
})
export class MoviesDetailsModule {}
