import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter, Inject} from '@angular/core';
import { MoviesService } from '../movies.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DialogPosterComponent } from '../dialog-poster/dialog-poster.component';
import { ChildActivationEnd } from '@angular/router';
import { DataMovie } from '../data-movie';

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
  public currentValue;
  public flagPoster = false;
  public poster;
  public movieDescription;
   
  // Component interation with the genre-list
  @Input('parentData') public idGenre;  
  @Input('sortbyData') public sortBy;
  @Input('searchQuery') public query;
  // @Input('movieID') public movieID;
  @Output() public movieEvent = new EventEmitter();

  constructor(private _moviesService: MoviesService, public dialog: MatDialog) { }
  
  fireEvent(movie){
      this.movieEvent.emit(movie.id);
      console.log(movie.id);
    }
    
  openDialog(movie){
       this.dialog.open(DialogPosterComponent, {
         data:{ 
           filme:movie
         }
       })
  }

  

  getMovie(movie){
    this.poster = movie;
    this.movieDescription = movie.overview;
    // this.flagPoster = true;
    console.log(this.poster);
  }

  // For an event in the genre list it changes de list
  ngOnChanges(changes: SimpleChanges){



    this.currentValue = changes['currentValue'];
    console.log(this.currentValue);
    // if(currentValue){
      // console.log(changes)
      // Método que busca um filme na API
      // console.log(this.currentValue);
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
      this._moviesService.getConfiguration().subscribe(dataConfig => {
        this.config = dataConfig;
      this._moviesService.getMovieDiscover(this.idGenre)
      .subscribe(data => {
        this.movie = data;
        // console.log(this.movie)
        this.flagChange = true;
        // this.flag = false;
       })
      });
    }
  }

  ngOnInit() {
    this._moviesService.getConfiguration().subscribe(dataConfig => {
      this.config = dataConfig;
      // console.log(this.config);
      
      this._moviesService.getMoviePoster().subscribe(data => {
        console.log(this.config);
        this.movie = data;
        // console.log(this.movie)
        this.flagConfig=true;
        this.flag = true;
      })
    });
  }

}
