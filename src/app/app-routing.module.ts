import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'movies-list',
    loadChildren: () =>
      import('./components/pages/movies/movies-list/movies-list.module').then(
        (m) => m.MoviesListModule
      ),
  },
  {
    path: 'movies-details/:id',
    loadChildren: () =>
      import(
        './components/pages/movies/movies-details/movies-details.module'
      ).then((m) => m.MoviesDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
