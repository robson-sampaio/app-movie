import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public movielist: object;
  public flag = false;
  public query;

  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    this._moviesService.getSearchMovies(this.query)
      .subscribe(data => {
        this.movielist = data;
        console.log(this.movielist)
        this.flag = true;
      });
  }
  
}
