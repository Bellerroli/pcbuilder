import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PCCase} from "../../../../shared/models/PCCase";

@Component({
  selector: 'app-case-uploader',
  templateUrl: './case-uploader.component.html',
  styleUrl: './case-uploader.component.scss'
})
export class CaseUploaderComponent {
  caseFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.minLength(10),
      Validators.required
    ]),
    length: new FormControl('', [
      Validators.required
    ]),
    width: new FormControl('', [
      Validators.required
    ]),
    height: new FormControl('', [
      Validators.required
    ])
  })

  @Output() caseEmitter: EventEmitter<PCCase> = new EventEmitter<PCCase>();

  onSubmit() {
    this.caseEmitter.emit({
      id: '', name: this.caseFormGroup.get("name")?.value,
      length: this.caseFormGroup.get("length")?.value,
      width: this.caseFormGroup.get("width")?.value,
      height: this.caseFormGroup.get("height")?.value
    })
    this.resetForm(this.caseFormGroup);
  }

  resetForm(form: FormGroup) {
    form.reset();
    Object.keys(form.controls).forEach(key => {
      // @ts-ignore
      form.get(key).setErrors(null);
    });
  }

}
