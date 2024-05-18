import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PSU} from "../../../../shared/models/PSU";

@Component({
  selector: 'app-psu-uploader',
  templateUrl: './psu-uploader.component.html',
  styleUrl: './psu-uploader.component.scss'
})
export class PsuUploaderComponent {
  psuFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.minLength(10),
      Validators.required
    ]),
    voltage: new FormControl('', [
      Validators.required
    ]),
    output: new FormControl('', [
      Validators.required
    ])
  })

  @Output() psuEmitter: EventEmitter<PSU> = new EventEmitter<PSU>();

  onSubmit() {
    this.psuEmitter.emit({
      id: '', name: this.psuFormGroup.get("name")?.value,
      voltage: this.psuFormGroup.get("voltage")?.value,
      output: this.psuFormGroup.get("output")?.value
    })
    this.resetForm(this.psuFormGroup);
  }

  resetForm(form: FormGroup) {
    form.reset();
    Object.keys(form.controls).forEach(key => {
      // @ts-ignore
      form.get(key).setErrors(null);
    });
  }
}
