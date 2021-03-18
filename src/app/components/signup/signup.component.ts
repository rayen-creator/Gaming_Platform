import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from './CustomClass/custom-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  signupForm:FormGroup
  constructor(
    private formBuilder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit() {
    this.signupForm=this.formBuilder.group({
      Firstname:['',[Validators.minLength(3),Validators.required]],
      Lastname:['',[Validators.minLength(3),Validators.required]],
      Email:['',[Validators.email,Validators.required]],
      Password:['',Validators.compose([
        // 1. Password Field is Required
        Validators.required,
        // 2. check whether the entered password has a number
        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        // 3. check whether the entered password has upper case letter
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        // 4. check whether the entered password has a lower-case letter
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
         // 5. check whether the entered password has a special character
        CustomValidators.patternValidator(/[!@#$%^&*()_+-=[]{};':",.<>':"|,.<>]/, { hasSpecialCharacters: true }),
        Validators.minLength(8)])],
      ConfirmPassword:['',Validators.compose([Validators.required])]
        // ConfirmPassword:['']
    }, 
    {
      // check whether our password and confirm password match
      validator: CustomValidators.passwordMatchValidator
      // validator: CustomValidators.MustMatch('Password','ConfirmPassword')

    }
    );
  }

  f(){
    alert("button work");
  }
  
}
