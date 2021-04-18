import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listgames',
  templateUrl: './listgames.component.html',
  styleUrls: ['./listgames.component.css']
})
export class ListgamesComponent implements OnInit {
  games:any;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotoadd(){
    this.router.navigate(["addgames"])
  }
}
