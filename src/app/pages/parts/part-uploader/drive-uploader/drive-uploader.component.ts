import { Component } from '@angular/core';
import {DriveType} from '../../../../shared/enums/DriveType';

@Component({
  selector: 'app-drive-uploader',
  templateUrl: './drive-uploader.component.html',
  styleUrl: './drive-uploader.component.scss'
})
export class DriveUploaderComponent {

  protected readonly DriveType = DriveType;
}
