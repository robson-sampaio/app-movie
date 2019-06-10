import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DataMovie } from '../data-movie';

@Component({
  selector: 'app-dialog-poster',
  templateUrl: './dialog-poster.component.html',
  styleUrls: ['./dialog-poster.component.css']
})
export class DialogPosterComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DataMovie) { }

  ngOnInit() {
    console.log(this.data);
  }

}
