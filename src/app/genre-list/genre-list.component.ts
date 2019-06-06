import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { IGenre } from '../genre';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {

  public genero;
  public flag = false;
  public teste;
  public idGenre;
  public sortBy;

  constructor(private _moviesService: MoviesService) { }

  returnIdGenre(data){
    this.idGenre = data;
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
