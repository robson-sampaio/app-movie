import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  public movie: object;
  public flag=false;

  

  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    this._moviesService.getMoviePoster()
      .subscribe(data => {
        this.movie = data;
        console.log(this.movie)
        this.flag = true;
      });
  }
}
