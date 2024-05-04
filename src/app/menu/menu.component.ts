import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Output() selectedPage: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private auth: AuthService){}

  logout(){
    this.auth.logout().catch(err=>{console.error(err)});
    close();
  }

  close(){
    this.onCloseSidenav.emit(true);
  }
}
