import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html',
  styleUrls: ['./addgame.component.css']
})
export class AddgameComponent implements OnInit {

  GameForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private gameservice:GameService
  ) { }

  ngOnInit() {
    this.GameForm=this.formBuilder.group({
      Platform:[''],
      Playtime:[''],
      Achievements:[''],
    })
  }
AddGame(){
  this.gameservice.AddGame(this.GameForm.value).subscribe(
    ()=>{
      this.router.navigate(['listgames']);
    }
  )
}
}
