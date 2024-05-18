import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CPU} from "../../../../shared/models/CPU";

@Component({
  selector: 'app-cpu-uploader',
  templateUrl: './cpu-uploader.component.html',
  styleUrl: './cpu-uploader.component.scss'
})
export class CpuUploaderComponent {

  cpuFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.minLength(10),
      Validators.required
    ]),
    clockSpeed: new FormControl('', [
      Validators.required
    ]),
    cores: new FormControl('', [
      Validators.required
    ])
  })

  @Output() cpuEmitter: EventEmitter<CPU> = new EventEmitter<CPU>();

  onSubmit() {
    this.cpuEmitter.emit({
      id: '', name: this.cpuFormGroup.get("name")?.value,
      clockSpeed: this.cpuFormGroup.get("clockSpeed")?.value,
      cores: this.cpuFormGroup.get("cores")?.value
    })
    this.resetForm(this.cpuFormGroup);
  }

  resetForm(form: FormGroup) {
    form.reset();
    Object.keys(form.controls).forEach(key => {
      // @ts-ignore
      form.get(key).setErrors(null);
    });
  }

}
