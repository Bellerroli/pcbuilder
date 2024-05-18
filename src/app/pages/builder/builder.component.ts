import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PcpartService} from "../../shared/services/pcpart.service";
import {CPU} from "../../shared/models/CPU";
import {GPU} from "../../shared/models/GPU";
import {RAM} from "../../shared/models/RAM";
import {Motherboard} from "../../shared/models/Motherboard";
import {Drive} from "../../shared/models/Drive";
import {PCCase} from "../../shared/models/PCCase";
import {PSU} from "../../shared/models/PSU";
import {PC} from "../../shared/models/PC";
import {AuthService} from "../../shared/services/auth.service";
import {PcService} from "../../shared/services/pc.service";
import {PCFullData} from "../../shared/models/PCFullData";

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss'
})
export class BuilderComponent implements OnInit{
  cpuList: Array<CPU> | undefined;
  gpuList: Array<GPU> | undefined;
  ramList: Array<RAM> | undefined;
  mbList: Array<Motherboard> | undefined;
  driveList: Array<Drive> | undefined;
  caseList: Array<PCCase> | undefined;
  psuList: Array<PSU> | undefined;
  userID: string | undefined;

  pcBuildForm: FormGroup = new FormGroup({
    cpu : new FormControl('',[
      Validators.required
    ]),
    gpu : new FormControl('',[
      Validators.required
    ]),
    ram : new FormControl('',[
      Validators.required
    ]),
    motherboard : new FormControl('',[
      Validators.required
    ]),
    case : new FormControl('',[
      Validators.required
    ]),
    ramNumber : new FormControl('',[
      Validators.required
    ]),
    psu : new FormControl('',[
      Validators.required
    ]),
    drive : new FormControl('',[
      Validators.required
    ]),
    driveNumber : new FormControl('',[
      Validators.required
    ])
  });

  ngOnInit(): void {
    this.partservice.findAll("CPU").subscribe(data=>{
      this.cpuList = data as Array<CPU>;
    })
    this.partservice.findAll("GPU").subscribe(data=>{
      this.gpuList = data as Array<GPU>;
    })
    this.partservice.findAll("RAM").subscribe(data=>{
      this.ramList = data as Array<RAM>;
    })
    this.partservice.findAll("Drive").subscribe(data=>{
      this.driveList = data as Array<Drive>;
    })
    this.partservice.findAll("PSU").subscribe(data=>{
      this.psuList = data as Array<PSU>;
    })
    this.partservice.findAll("Motherboard").subscribe(data=>{
      this.mbList = data as Array<Motherboard>;
    })
    this.partservice.findAll("Case").subscribe(data=>{
      this.caseList = data as Array<PCCase>;
    })

    this.authService.currUser().subscribe(user=>{
      this.userID = user?.uid;
    })
  }

  constructor(private partservice: PcpartService, private authService: AuthService, private pcService: PcService) {
  }

  onSubmit() {
    this.pcService.create({
      id: "",
      userID: this.userID,
      cpu: this.pcBuildForm.get("cpu")?.value,
      gpu: this.pcBuildForm.get("gpu")?.value,
      ram: this.pcBuildForm.get("ram")?.value,
      ramNumber: this.pcBuildForm.get("ramNumber")?.value,
      psu: this.pcBuildForm.get("psu")?.value,
      drive: this.pcBuildForm.get("psu")?.value,
      driveNumber: this.pcBuildForm.get("driveNumber")?.value,
      case: this.pcBuildForm.get("case")?.value,
      motherboard: this.pcBuildForm.get("motherboard")?.value,
    } as PCFullData)
    this.resetForm(this.pcBuildForm);
  }
  resetForm(form: FormGroup) {
    form.reset();
    Object.keys(form.controls).forEach(key => {
      // @ts-ignore
      form.get(key).setErrors(null);
    });
  }
}
