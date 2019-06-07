import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { MoviesService } from '../movies.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})

export class PosterComponent implements OnInit, OnChanges {

  public movie: object;
  public flag = false;
  public flagChange = false;
  public posterPath;
  public base_url = "http://image.tmdb.org/t/p";
  public posters_sizes = [];
  public img_path;
  public config;
  public flagConfig = false;
  public flagSearch = false;
  public movieSearch;
   
  // Component interation with the genre-list
  @Input('parentData') public idGenre;  
  @Input('sortbyData') public sortBy;
  @Input('searchQuery') public query;

  constructor(private _moviesService: MoviesService) { }

  // For an event in the genre list it changes de list
  ngOnChanges(changes: SimpleChanges){

    // if(changes.SimpleChanges.currentValue){
      console.log(changes)
      // Método que busca um filme na API
      this.flagConfig = false;
      this._moviesService.getSearchMovies(this.query)
      .subscribe(data => {
      this.movie = data;  
      this.flagConfig = true;    
    });
    // }
    
    // console.log(changes)
    // Método que mostra os filmes
    if(changes.idGenre){
      this._moviesService.getMovieDiscover(this.idGenre)
      .subscribe(data => {
        this.movie = data;
        // console.log(this.movie)
        this.flagChange = true;
        // this.flag = false;
      });
    }
  }

  ngOnInit() {
    this._moviesService.getConfiguration().subscribe(dataConfig => {
      this.config = dataConfig;
      // console.log(this.config);
      this.flagConfig=true;
      this._moviesService.getMoviePoster().subscribe(data => {
        console.log(this.config);
        this.movie = data;
        console.log(this.movie)
        this.flag = true;
      })
    });
  }

}
