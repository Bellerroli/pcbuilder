import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {PCPart} from "../../../shared/models/PCPart";
import {PcpartService} from "../../../shared/services/pcpart.service";
import {CPU} from "../../../shared/models/CPU";
import {GPU} from "../../../shared/models/GPU";
import {PCCase} from "../../../shared/models/PCCase";
import {Motherboard} from "../../../shared/models/Motherboard";
import {PSU} from "../../../shared/models/PSU";
import {RAM} from "../../../shared/models/RAM";
import {Drive} from "../../../shared/models/Drive";

@Component({
  selector: 'app-part-uploader',
  templateUrl: './part-uploader.component.html',
  styleUrl: './part-uploader.component.scss'
})
export class PartUploaderComponent implements OnChanges{
  @Input() uploadFormPick: string = "CPU";
  partToSave: PCPart | undefined;

  constructor(private partService: PcpartService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.uploadFormPick = changes["uploadFormPick"].currentValue as string;
  }

  savePCPart(){
    this.partService.create(this.uploadFormPick, this.partToSave as PCPart);
  }

  saveCPU(cpu: CPU){
    this.partToSave = cpu;
    this.savePCPart();
  }

  saveCase(pccase: PCCase){
    this.partToSave = pccase;
    this.savePCPart();
  }
  saveMotherboard(mb: Motherboard){
    this.partToSave = mb;
    this.savePCPart();
  }
  savePSU(psu: PSU){
    this.partToSave = psu;
    this.savePCPart();
  }
  saveRAM(ram: RAM){
    this.partToSave = ram;
    this.savePCPart();
  }
  saveDrive(drive: Drive){
    this.partToSave = drive;
    this.savePCPart();
  }
  saveGPU(gpu: GPU){
    this.partToSave = gpu;
    this.savePCPart();
  }
}
