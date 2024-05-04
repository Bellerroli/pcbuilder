import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss'
})
export class BuilderComponent {
  pcBuildForm: FormGroup = new FormGroup({
    cpu : new FormControl(),
    gpu : new FormControl(),
    ram : new FormControl(),
    motherboard : new FormControl(),
    case : new FormControl(),
    ramNumber : new FormControl(),
    psu : new FormControl(),
    drive : new FormControl(),
    driveNumber : new FormControl()
  });

  onSubmit(){

  }
}
