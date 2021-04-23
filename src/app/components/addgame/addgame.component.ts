import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import {Game} from 'backend/models/game'
@Component({
  selector: 'app-addgame',
  templateUrl: './addgame.component.html',
  styleUrls: ['./addgame.component.css']
})
export class AddgameComponent implements OnInit {

  GameForm:FormGroup;
  imagePreview:string;

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private gameservice:GameService
  ) { }

  ngOnInit() {
    this.GameForm=this.formBuilder.group({
      Image:[''],
      Name:[''],
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
onImageSelected(event: Event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.GameForm.patchValue({
      Image: file
    });
  this.GameForm.get('Image').updateValueAndValidity();

  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview =  reader.result as string
  };
  reader.readAsDataURL(file);
  
}
}
