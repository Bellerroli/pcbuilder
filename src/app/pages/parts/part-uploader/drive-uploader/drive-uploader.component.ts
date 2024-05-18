import {Component, EventEmitter, Output} from '@angular/core';
import {DriveType} from '../../../../shared/enums/DriveType';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Drive} from "../../../../shared/models/Drive";

@Component({
  selector: 'app-drive-uploader',
  templateUrl: './drive-uploader.component.html',
  styleUrl: './drive-uploader.component.scss'
})
export class DriveUploaderComponent {
  driveFormGroup: FormGroup = new FormGroup({
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

  @Output() driveEmitter: EventEmitter<Drive> = new EventEmitter<Drive>();

  onSubmit() {
    this.driveEmitter.emit({
      id: '', name: this.driveFormGroup.get("name")?.value,
      size: this.driveFormGroup.get("size")?.value,
      type: this.driveFormGroup.get("type")?.value
    })
    this.resetForm(this.driveFormGroup);
  }

  resetForm(form: FormGroup) {
    form.reset();
    Object.keys(form.controls).forEach(key => {
      // @ts-ignore
      form.get(key).setErrors(null);
    });
  }

  protected readonly DriveType = DriveType;
}
