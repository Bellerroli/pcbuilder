import {Component, OnInit} from '@angular/core';
import {PCPart} from "../../shared/models/PCPart";

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.scss'
})
export class PartsComponent implements OnInit{
  pcPartCategory: string = "cpu";
  pcParts: Array<PCPart> = [];
  pcPartCategories = ["cpu", "gpu", "ram"];

  ngOnInit() {
    this.pcParts = [{id:'tuf', name:"TUF"}]
  }
}
