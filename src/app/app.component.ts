import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {AuthService} from "./shared/services/auth.service";
import {MatSidenav} from "@angular/material/sidenav";
// @ts-ignore
import firebase from "$GLOBAL$";
import {User} from "./shared/models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'pcbuilder';
  currentUser?: firebase.User | null;

  constructor(private router: Router, private auth: AuthService) {
  };

  logout() {
    this.auth.logout().catch(err => {
      console.error(err)
    });
  }

  onSideNavClose(event: any, sidenav: MatSidenav) {
    if (event === true) sidenav.close().then(r => {
    });
  }

  isUserLoggedIn() {
    return this.currentUser !== null;
  }

  ngOnInit(): void {
    this.auth.currUser().subscribe(user => {
        this.currentUser = user;
        localStorage.setItem('user', JSON.stringify(user));
      },
      error => {
        console.log(error);
        localStorage.setItem('user', JSON.stringify('null'));
      })
  }
}
