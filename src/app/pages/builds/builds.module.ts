import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BuildsRoutingModule} from './builds-routing.module';
import {BuildsComponent} from './builds.component';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatList, MatListItem, MatListItemLine, MatListItemTitle} from "@angular/material/list";
import {MatFormField, MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BuildsComponent
  ],
  imports: [
    CommonModule,
    BuildsRoutingModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardActions,
    MatButton,
    MatList,
    MatListItem,
    MatListItemTitle,
    MatListItemLine,
    MatSelect,
    MatOption,
    MatInput,
    MatFormField,
    MatLabel,
    FormsModule
  ]
})
export class BuildsModule {
}
