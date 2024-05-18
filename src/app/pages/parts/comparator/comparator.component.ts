import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PCPart} from "../../../shared/models/PCPart";
import {CPU} from "../../../shared/models/CPU";
import {GPU} from "../../../shared/models/GPU";
import {Motherboard} from "../../../shared/models/Motherboard";
import {RAM} from "../../../shared/models/RAM";
import {PSU} from "../../../shared/models/PSU";
import {Drive} from "../../../shared/models/Drive";
import {PCCase} from "../../../shared/models/PCCase";

@Component({
  selector: 'app-comparator',
  templateUrl: './comparator.component.html',
  styleUrl: './comparator.component.scss'
})
export class ComparatorComponent implements OnChanges {
  displayColumnsCPU:string[] = ['name', 'clockSpeed', 'cores'];
  displayColumnsGPU: string[] = ['name', 'clockSpeed', 'memory'];
  displayColumnsMotherboard: string[] = ['name', 'ramNumbers'];
  displayColumnsRAM: string[] = ['name', 'size', 'type'];
  displayColumnsPSU: string[] = ['name', 'voltage', 'output'];
  displayColumnsDrive: string[] = ['name', 'size', 'type'];
  displayColumnsCase: string[] = ['name', 'length', 'height', 'width'];

  @Output() selectedCategoryEmitter: EventEmitter<string> = new EventEmitter<string>();
  selectedCategory: string = "CPU";
  @Input() pcPartsComparator: Array<PCPart> = [];
  selectedPart1: PCPart | undefined;
  selectedPart2: PCPart | undefined;
  showComparison: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.pcPartsComparator = changes["pcPartsComparator"].currentValue;
    this.selectedPart2 = this.pcPartsComparator[0];
    this.selectedPart1 = this.pcPartsComparator[0];
  }

  changeCategory() {
    this.selectedCategoryEmitter.emit(this.selectedCategory);
    this.hideComparisonData();
  }

  compareCPUs(): Array<CPU> {
    return [this.selectedPart1 as CPU, this.selectedPart2 as CPU];
  }

  compareGPUs(): Array<GPU>{
    return [this.selectedPart1 as GPU, this.selectedPart2 as GPU];
  }

  compareMotherboards(): Array<Motherboard>{
    return [this.selectedPart1 as Motherboard, this.selectedPart2 as Motherboard];
  }

  compareRAMs(): Array<RAM>{
    return [this.selectedPart1 as RAM, this.selectedPart2 as RAM];
  }

  comparePSUs(): Array<PSU>{
    return [this.selectedPart1 as PSU, this.selectedPart2 as PSU];
  }

  compareDrives(): Array<Drive>{
    return [this.selectedPart1 as Drive, this.selectedPart2 as Drive];
  }

  compareCases(): Array<PCCase>{
    return [this.selectedPart1 as PCCase, this.selectedPart2 as PCCase];
  }



  partChange() {
    this.hideComparisonData();
  }

  showComparisonData(){
    this.showComparison = true;
  }

  hideComparisonData(){
    this.showComparison = false;
  }

}
