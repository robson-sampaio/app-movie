import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGenre } from './genre';
import { map } from 'rxjs/operators';
import { IPoster } from './poster';
import { ISearch} from './search';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }
  private apikey: string = "95e310c9cdf43a266b381436c3d83fc8";
  private urlMovieDb: string = "https://api.themoviedb.org/3";

  getGenre(): Observable<IGenre>{
    return this.http.get<IGenre>("https://api.themoviedb.org/3/genre/movie/list?api_key=95e310c9cdf43a266b381436c3d83fc8&language=en-US")
  }

  // Most popular
  getMoviePoster(): Observable<IPoster>{
    return this.http.get<IPoster>("https://api.themoviedb.org/3/movie/popular?api_key=95e310c9cdf43a266b381436c3d83fc8&language=en-US&page=1")
  }

  getSearch(): Observable<ISearch>{
    return this.http.get<ISearch>("https://api.themoviedb.org/3/search/movie?api_key=95e310c9cdf43a266b381436c3d83f&language=en-US&query=test&page=1&include_adult=false")
  }
}
