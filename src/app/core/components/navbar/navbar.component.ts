import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLoggedIn : boolean = false;
  constructor(private _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    const user = this._localStorageService.getUserProfile()
    console.log(user)
    if (user) {
      this.isLoggedIn = true;
    }
  }

}
