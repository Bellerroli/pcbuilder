import { Component } from '@angular/core';

@Component({
  selector: 'app-part-uploader',
  templateUrl: './part-uploader.component.html',
  styleUrl: './part-uploader.component.scss'
})
export class PartUploaderComponent {
  uploadFormPick: string = "cpu";

  loadForm(){
    console.log(this.uploadFormPick);
  }
}
