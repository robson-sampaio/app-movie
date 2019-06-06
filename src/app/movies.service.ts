import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGenre } from './genre';
import { map } from 'rxjs/operators';
import { IPoster } from './poster';
import { ISearch } from './search';
import { IMovieDiscover } from './movieDiscover'
import { IConfiguration } from './configuration'
import { ISortBy } from './sortby';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }
  private apikey: string = "95e310c9cdf43a266b381436c3d83fc8";
  private urlMovieDb: string = "https://api.themoviedb.org/3";

  getGenre(): Observable<IGenre>{
    return this.http.get<IGenre>("https://api.themoviedb.org/3/genre/movie/list?api_key=95e310c9cdf43a266b381436c3d83fc8&language=en-US");
  }

  // Most popular
  getMoviePoster(): Observable<IPoster>{
    return this.http.get<IPoster>("https://api.themoviedb.org/3/discover/movie?api_key=95e310c9cdf43a266b381436c3d83fc8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false");
  }

  getSearch(): Observable<ISearch>{
    return this.http.get<ISearch>("https://api.themoviedb.org/3/search/movie?api_key=95e310c9cdf43a266b381436c3d83f&language=en-US&query=test&page=1&include_adult=false");
  }

  getConfiguration(): Observable<IConfiguration>{
    return this.http.get<IConfiguration>("https://api.themoviedb.org/3/configuration?api_key=95e310c9cdf43a266b381436c3d83fc8");
  }

  getMovieDiscover(idGenre, sortBy): Observable<IMovieDiscover>{
    return this.http.get<IMovieDiscover>("https://api.themoviedb.org/3/discover/movie?api_key=95e310c9cdf43a266b381436c3d83fc8&language=en-US&"+sortBy+"&include_adult=false&include_video=false&with_genres="+idGenre);
  }

}
