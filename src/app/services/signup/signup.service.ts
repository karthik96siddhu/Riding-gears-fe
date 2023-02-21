import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  public apiBaseURL = environment.apiBaseURL
  constructor(private _http: HttpClient ){ }

  public signUp(body:any) {
    return this._http.post(this.apiBaseURL + '/signup', body)
  }

  public login(body:any) {
    return this._http.post(this.apiBaseURL + '/login', body)
  }
}
