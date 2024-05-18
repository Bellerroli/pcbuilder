import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GPU} from "../../../../shared/models/GPU";

@Component({
  selector: 'app-gpu-uploader',
  templateUrl: './gpu-uploader.component.html',
  styleUrl: './gpu-uploader.component.scss'
})
export class GpuUploaderComponent {
  gpuFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.minLength(10),
      Validators.required
    ]),
    clockSpeed: new FormControl('', [
      Validators.required
    ]),
    memorySize: new FormControl('', [
      Validators.required
    ])
  })

  @Output() gpuEmitter: EventEmitter<GPU> = new EventEmitter<GPU>();

  onSubmit() {
    this.gpuEmitter.emit({
      id: '',
      name: this.gpuFormGroup.get("name")?.value,
      clockSpeed: this.gpuFormGroup.get("clockSpeed")?.value,
      memorySize: this.gpuFormGroup.get("memorySize")?.value
    })
    this.resetForm(this.gpuFormGroup);
  }

  resetForm(form: FormGroup) {
    form.reset();
    Object.keys(form.controls).forEach(key => {
      // @ts-ignore
      form.get(key).setErrors(null);
    });
  }

}
