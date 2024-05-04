import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PCPart} from "../../../shared/models/PCPart";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-comparator',
  templateUrl: './comparator.component.html',
  styleUrl: './comparator.component.scss'
})
export class ComparatorComponent {
  @Output() selectedCategoryEmitter: EventEmitter<string> = new EventEmitter<string>();
  selectedCategory : string = "cpu";
  @Input() pcPartsComparator: Array<PCPart> = [];
  selectedPart1: PCPart | undefined;
  selectedPart2: PCPart | undefined;
  selectedPCParts: Array<PCPart> = [{id: 'xxxxx', name:"valami"}];
  comparatorForm: FormGroup = new FormGroup({
    part1: new FormControl(),
    part2: new FormControl()
  })
  changeCategory(){
    this.selectedCategoryEmitter.emit(this.selectedCategory);
  }

  compareParts(){

  }
  changeSelectedPart1(){

  }
  changeSelectedPart2(){

  }

}
