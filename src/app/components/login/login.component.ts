import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private authservice:AuthService
  ) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      Email:['',[Validators.email,Validators.required]],
      Password:['',[Validators.required,Validators.minLength(8)]],
    })
  }
  Login(){
    this.authservice.login(this.loginForm.value)
     
  }
}
