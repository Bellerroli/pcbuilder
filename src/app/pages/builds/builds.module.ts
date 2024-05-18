import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildsRoutingModule } from './builds-routing.module';
import { BuildsComponent } from './builds.component';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";


@NgModule({
  declarations: [
    BuildsComponent
  ],
  imports: [
    CommonModule,
    BuildsRoutingModule,
    MatCard,
    MatCardHeader,
    MatCardContent
  ]
})
export class BuildsModule { }
