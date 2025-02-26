import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';





@NgModule({
  declarations: [
    AboutComponent,
    ScrollAnimationDirective
    
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    TranslateModule,
    
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
