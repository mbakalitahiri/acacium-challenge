import { ROOT_REDUCERS } from './state/app.state';
import { environment } from './environments/environment.prod';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormSearchComponent } from './shared/components/form-search/form-search.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RatingModule } from './components/pages/movies/rating/rating.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { itemsReducer } from './state/reducers/items.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './state/effects/item.effects';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FormSearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RatingModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ItemEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
