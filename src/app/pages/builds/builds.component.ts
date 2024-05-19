import {Component, OnInit} from '@angular/core';
import {PcService} from "../../shared/services/pc.service";
import {PCFullData} from "../../shared/models/PCFullData";
import {AuthService} from "../../shared/services/auth.service";
import {CPU} from "../../shared/models/CPU";
import {GPU} from "../../shared/models/GPU";
import {RAM} from "../../shared/models/RAM";
import {Motherboard} from "../../shared/models/Motherboard";
import {Drive} from "../../shared/models/Drive";
import {PCCase} from "../../shared/models/PCCase";
import {PSU} from "../../shared/models/PSU";
import {PcpartService} from "../../shared/services/pcpart.service";

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrl: './builds.component.scss'
})
export class BuildsComponent implements OnInit {
  userFullPCs: Array<PCFullData> = [];
  userID: string = "";
  pcBeingModified: PCFullData | undefined;
  success: string | undefined;
  error: string | undefined;

  cpuList: Array<CPU> | undefined;
  gpuList: Array<GPU> | undefined;
  ramList: Array<RAM> | undefined;
  mbList: Array<Motherboard> | undefined;
  driveList: Array<Drive> | undefined;
  caseList: Array<PCCase> | undefined;
  psuList: Array<PSU> | undefined;

  cpuUpdateList: Array<CPU> | undefined;
  gpuUpdateList: Array<GPU> | undefined;
  ramUpdateList: Array<RAM> | undefined;
  mbUpdateList: Array<Motherboard> | undefined;
  psuUpdateList: Array<PSU> | undefined;
  driveUpdateList: Array<Drive> | undefined;
  caseUpdateList: Array<PCCase> | undefined;

  constructor(private pcservice: PcService, private authService: AuthService,
              private partservice: PcpartService) {
  }

  ngOnInit() {
    this.authService.currUser().subscribe(user => {
      this.userID = user?.uid as string;
      this.pcservice.findAllForUser(this.userID).subscribe(pcs => {
        this.userFullPCs = pcs as PCFullData[];
      })
    })

    this.partservice.findAll("CPU").subscribe(data => {
      this.cpuList = data as Array<CPU>;
    })
    this.partservice.findAll("GPU").subscribe(data => {
      this.gpuList = data as Array<GPU>;
    })
    this.partservice.findAll("RAM").subscribe(data => {
      this.ramList = data as Array<RAM>;
    })
    this.partservice.findAll("Drive").subscribe(data => {
      this.driveList = data as Array<Drive>;
    })
    this.partservice.findAll("PSU").subscribe(data => {
      this.psuList = data as Array<PSU>;
    })
    this.partservice.findAll("Motherboard").subscribe(data => {
      this.mbList = data as Array<Motherboard>;
    })
    this.partservice.findAll("Case").subscribe(data => {
      this.caseList = data as Array<PCCase>;
    })
  }

  deletePC(pc: PCFullData) {
    this.pcservice.delete(pc);
    this.success = "PC deleted!"
  }

  updatePC() {
    this.pcBeingModified ? this.pcservice.update(this.pcBeingModified) : this.error = "Couldn't update this PC!";
    if (!this.error) this.success = "Build updated!";
    this.pcBeingModified = undefined;
  }

  updatingPC(pc: PCFullData) {
    this.pcBeingModified = pc;
    this.cpuUpdateList = this.cpuList?.filter(cpu => cpu.id !== this.pcBeingModified?.cpu.id);
    this.gpuUpdateList = this.gpuUpdateList?.filter(gpu => gpu.id !== this.pcBeingModified?.gpu.id);
    this.ramUpdateList = this.ramUpdateList?.filter(ram => ram.id !== this.pcBeingModified?.ram.id);
    this.mbUpdateList = this.mbList?.filter(mb => mb.id !== this.pcBeingModified?.motherboard.id);
    this.driveUpdateList = this.driveList?.filter(drive => drive.id !== this.pcBeingModified?.drive.id);
    this.caseUpdateList = this.caseList?.filter(pccase => pccase.id !== this.pcBeingModified?.case.id);
    this.psuUpdateList = this.psuList?.filter(psu => psu.id !== this.pcBeingModified?.psu.id);
    this.error = undefined;
    this.success = undefined;
  }

  cancelUpdate() {
    this.pcBeingModified = undefined;
  }
}
