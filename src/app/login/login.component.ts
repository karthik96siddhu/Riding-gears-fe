import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { SignupService } from '../services/signup/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this._fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required] 
  })

  constructor(private _fb: FormBuilder,
              private _signUpService: SignupService,
              private _router: Router,
              private _localStorageService: LocalStorageService,
              private _spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this._spinner.show()
    this._signUpService.login(this.loginForm.value).subscribe(((response: any) => {
      this._spinner.hide()
      if (response.token) {
        this._localStorageService.setAccessToken(response.token)
      }
      if (response.user) {
        this._localStorageService.setUserProfile(response.user)
      }
      this._router.navigate(['home'])
    }),
    (error:any) => {
      console.log(error)
    })
  }

}
