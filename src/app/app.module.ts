import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

import { HttpClientModule} from '@angular/common/http';
import { GenreListComponent } from './genre-list/genre-list.component';
import { PosterComponent } from './poster/poster.component';
import { SortByComponent } from './sort-by/sort-by.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    GenreListComponent,
    PosterComponent,
    SortByComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
