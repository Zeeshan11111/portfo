import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  { path: '', component: ExperienceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
