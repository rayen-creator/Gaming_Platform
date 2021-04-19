import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-listgames',
  templateUrl: './listgames.component.html',
  styleUrls: ['./listgames.component.css']
})
export class ListgamesComponent implements OnInit {
  games:any;
  constructor(
    private router:Router,
    private GameService:GameService
    ) { }

  ngOnInit() {
    this.GameService.GetAllGame().subscribe(
      (data) => {
        this.games = data.allgames;
      }
      )
  }
  gotoadd(){
    this.router.navigate(["addgames"])
    
  }
}
