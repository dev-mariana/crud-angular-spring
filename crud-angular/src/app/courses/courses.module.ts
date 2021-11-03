import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';

import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from './../shared/shared.module';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './services/courses.service';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    SharedModule
  ],
  providers: [CoursesService]
})
export class CoursesModule { }
