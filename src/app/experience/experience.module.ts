import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience/experience.component';
import { MatCardModule } from '@angular/material/card';

import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    MatCardModule,
    MatListModule,
    
  ]
})
export class ExperienceModule { }
