import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {AuthService} from "./shared/services/auth.service";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'pcbuilder';
  constructor(private router: Router, private auth: AuthService){};

  logout() {
    this.auth.logout().catch(err=>{console.error(err)});
  }

  onSideNavClose(event: any, sidenav: MatSidenav){
    if(event === true) sidenav.close();
  }
}
