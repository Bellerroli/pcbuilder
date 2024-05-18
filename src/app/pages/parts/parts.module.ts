import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartsRoutingModule } from './parts-routing.module';
import { PartsComponent } from './parts.component';
import { ComparatorComponent } from './comparator/comparator.component';
import { PartUploaderComponent } from './part-uploader/part-uploader.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CpuUploaderComponent } from './part-uploader/cpu-uploader/cpu-uploader.component';
import { GpuUploaderComponent } from './part-uploader/gpu-uploader/gpu-uploader.component';
import { RamUploaderComponent } from './part-uploader/ram-uploader/ram-uploader.component';
import { PsuUploaderComponent } from './part-uploader/psu-uploader/psu-uploader.component';
import { MotherboardUploaderComponent } from './part-uploader/motherboard-uploader/motherboard-uploader.component';
import { DriveUploaderComponent } from './part-uploader/drive-uploader/drive-uploader.component';
import { CaseUploaderComponent } from './part-uploader/case-uploader/case-uploader.component';
import {MatFormField, MatOption, MatSelect} from "@angular/material/select";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatLabel} from "@angular/material/form-field";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";


@NgModule({
  declarations: [
    PartsComponent,
    ComparatorComponent,
    PartUploaderComponent,
    CpuUploaderComponent,
    GpuUploaderComponent,
    RamUploaderComponent,
    PsuUploaderComponent,
    MotherboardUploaderComponent,
    DriveUploaderComponent,
    CaseUploaderComponent
  ],
  imports: [
    CommonModule,
    PartsRoutingModule,
    FormsModule,
    MatSelect,
    MatOption,
    MatFormField,
    MatButton,
    ReactiveFormsModule,
    MatInput,
    MatLabel,
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef
  ]
})
export class PartsModule { }
