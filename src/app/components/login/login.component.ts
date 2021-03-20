import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      Email:['',[Validators.email,Validators.required]],
      Password:['',[Validators.required,Validators.minLength(8)]],
    })
  }
  F(){
    alert('login work')
  }
}
