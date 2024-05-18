import {Component, Input, OnInit} from '@angular/core';
import {PcService} from "../../shared/services/pc.service";
import {PCFullData} from "../../shared/models/PCFullData";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrl: './builds.component.scss'
})
export class BuildsComponent implements OnInit {
  userFullPCs: Array<PCFullData> = [];
  userID: string = "";
  constructor(private pcservice:PcService, private authService: AuthService) {
  }
  ngOnInit() {
    this.authService.currUser().subscribe(user=>{
      this.userID = user?.uid as string;
      this.pcservice.findAllForUser(this.userID).subscribe(pcs=>{
        this.userFullPCs = pcs as PCFullData[];
      })
    })
    // this.pcservice.findAllForUser()
  }
}
