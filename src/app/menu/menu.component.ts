import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{
  @Output() selectedPage: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private auth: AuthService){}
  loggedIn: boolean = false;
  ngOnInit() {
    this.auth.currUser().subscribe(data=>{
      this.loggedIn = data != null;
    })
  }

  logout(){
    this.auth.logout().catch(err=>{console.error(err)});
    close();
  }

  close(){
    this.onCloseSidenav.emit(true);
  }
}
