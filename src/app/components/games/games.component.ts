import { Component,Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  @Input() game:any;
  constructor() { }

  ngOnInit() {
  }

}
