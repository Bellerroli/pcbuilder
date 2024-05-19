import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RAM} from "../../../../shared/models/RAM";

@Component({
  selector: 'app-ram-uploader',
  templateUrl: './ram-uploader.component.html',
  styleUrl: './ram-uploader.component.scss'
})
export class RamUploaderComponent {
  success: string | undefined;
  ramFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.minLength(10),
      Validators.required
    ]),
    size: new FormControl('', [
      Validators.required
    ]),
    type: new FormControl('', [
      Validators.required
    ])
  })

  @Output() ramEmitter: EventEmitter<RAM> = new EventEmitter<RAM>();

  onSubmit() {
    this.ramEmitter.emit({
      id: '', name: this.ramFormGroup.get("name")?.value,
      size: this.ramFormGroup.get("size")?.value,
      type: this.ramFormGroup.get("type")?.value
    })
    this.resetForm(this.ramFormGroup);
    this.success = "Part saved!"
  }

  resetForm(form: FormGroup) {
    form.reset();
    Object.keys(form.controls).forEach(key => {
      // @ts-ignore
      form.get(key).setErrors(null);
    });
  }

}
