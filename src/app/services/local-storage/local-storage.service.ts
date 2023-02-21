import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setAccessToken(token:any) {
    localStorage.setItem('token', token)
  }

  public getAccessToken() {
    return localStorage.getItem('token')
  }

  public setUserProfile(data:any) {
    localStorage.setItem('user', JSON.stringify(data))
  }

  public getUserProfile() {
    return localStorage.getItem('user')
  }
}
