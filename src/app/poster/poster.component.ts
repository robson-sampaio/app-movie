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

   
  @Input('parentData') public idGenre;  

  constructor(private _moviesService: MoviesService) { }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
    this._moviesService.getMovieDiscover(this.idGenre )
      .subscribe(data => {
        this.movie = data;
        console.log(this.movie)
        this.flagChange = true;
        // this.flag = false;
      });
  }

  ngOnInit() {
    this._moviesService.getMoviePoster()
      .subscribe(data => {
        this.movie = data;
        console.log(this.movie)
        this.flag = true;
      });
  }
}
