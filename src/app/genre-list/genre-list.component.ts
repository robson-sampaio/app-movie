import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MoviesService } from '../movies.service';
import { IGenre } from '../genre';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit, OnChanges {

  public genero;
  public flag = false;
  public teste;
  public idGenre;
  public sortBy;
  public movie;
  
  @Output() public movieEvent = new EventEmitter();

  constructor(private _moviesService: MoviesService) { }

  returnIdGenre(data){
    this.idGenre = data;
  }

  ngOnChanges(changes: SimpleChanges){
    
    if(this.movie)
      this.movieEvent.emit(this.movie);
      
  }

  ngOnInit(){
    this._moviesService.getGenre()
      .subscribe(data => {
        this.genero = data;
        console.log(this.genero)
        this.flag = true;
      });
  }

}
