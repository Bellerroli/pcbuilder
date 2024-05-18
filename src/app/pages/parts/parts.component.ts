import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PCPart} from "../../shared/models/PCPart";
import {PcpartService} from "../../shared/services/pcpart.service";

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.scss'
})
export class PartsComponent implements OnInit{
  pcPartCategory: string = "CPU";
  pcParts: Array<PCPart> = [];


  constructor(private pcpartService: PcpartService) {}
  ngOnInit() {
    this.pcpartService.findAll(this.pcPartCategory).subscribe(data=> {
      this.pcParts = data as Array<PCPart>;
    });
  }

  changeCategory(newCategory:string){
    this.pcPartCategory = newCategory;
    this.pcpartService.findAll(this.pcPartCategory).subscribe(data=> {
      console.log(data);
      this.pcParts = data as Array<PCPart>;
    });
  }

}
