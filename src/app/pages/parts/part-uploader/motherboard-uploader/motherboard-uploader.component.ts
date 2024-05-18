import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Motherboard} from "../../../../shared/models/Motherboard";

@Component({
  selector: 'app-motherboard-uploader',
  templateUrl: './motherboard-uploader.component.html',
  styleUrl: './motherboard-uploader.component.scss'
})
export class MotherboardUploaderComponent {

  mbFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.minLength(10),
      Validators.required
    ]),
    ramNumbers: new FormControl('', [
      Validators.required
    ])
  })

  @Output() mbEmitter: EventEmitter<Motherboard> = new EventEmitter<Motherboard>();

  onSubmit() {
    this.mbEmitter.emit({
      id: '', name: this.mbFormGroup.get("name")?.value,
      ramNumbers: this.mbFormGroup.get("ramNumbers")?.value
    })
    this.resetForm(this.mbFormGroup);
  }

  resetForm(form: FormGroup) {
    form.reset();
    Object.keys(form.controls).forEach(key => {
      // @ts-ignore
      form.get(key).setErrors(null);
    });
  }

}
