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
import { ISearchMovies } from './searchmovies';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }
  private apikey: string = "95e310c9cdf43a266b381436c3d83fc8"; //chave gerada na API the movie database
  private urlMovieDb: string = "https://api.themoviedb.org/3"; // URL padrão

  getGenre(): Observable<IGenre>{
    return this.http.get<IGenre>(this.urlMovieDb+"/genre/movie/list?api_key="+this.apikey+"&language=pt-BR");
  }

  // Most popular
  getMoviePoster(): Observable<IPoster>{
    return this.http.get<IPoster>(this.urlMovieDb+"/discover/movie?api_key="+this.apikey+"&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false");
  }

  getConfiguration(): Observable<IConfiguration>{
    return this.http.get<IConfiguration>(this.urlMovieDb+"/configuration?api_key="+this.apikey);
  }

  getMovieDiscover(idGenre): Observable<IMovieDiscover>{
    return this.http.get<IMovieDiscover>(this.urlMovieDb+"/discover/movie?api_key="+this.apikey+"&language=pt-BR&include_adult=false&include_video=false&with_genres="+idGenre);
  }

  getSearchMovies(query): Observable<ISearchMovies>{
    return this.http.get<ISearchMovies>("https://api.themoviedb.org/3/search/movie?api_key=95e310c9cdf43a266b381436c3d83fc8&language=pt-BR&query="+query+"&page=1&include_adult=false");
  }

}
