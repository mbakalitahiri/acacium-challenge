import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MoviesListModule } from './../movies/movies-list/movies-list.module';
import { MoviesModule } from './../movies/movies.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MoviesModule, MoviesListModule],
})
export class HomeModule {}
