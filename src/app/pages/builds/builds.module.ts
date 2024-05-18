import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BuildsRoutingModule} from './builds-routing.module';
import {BuildsComponent} from './builds.component';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatList, MatListItem, MatListItemLine, MatListItemTitle} from "@angular/material/list";
import {MatOption, MatSelect} from "@angular/material/select";


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
    MatOption
  ]
})
export class BuildsModule {
}
