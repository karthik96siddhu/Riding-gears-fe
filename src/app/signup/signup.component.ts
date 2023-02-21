import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required] 
  })
  public registrationSuccessMessage = ''

  constructor(private fb: FormBuilder,
              private signUpService: SignupService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.signUpService.signUp(this.profileForm.value).subscribe(((response: any) => {
      this.registrationSuccessMessage = 'Registration Success'
      setTimeout(() => {
        this._router.navigate(['login'])
      }, 2000)
      
    }),
    (error:any) => {
      console.log(error)
    })
  }

}
