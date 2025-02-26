import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AboutModule } from '../about/about.module';
import { ContactModule } from '../contact/contact.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';






@NgModule({
  declarations: [
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AboutModule,
    ContactModule,
    TranslateModule,
    NgOptimizedImage,
    
    MatCardModule,
    
  ]
})
export class HomeModule { }
