import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';




@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  
 


  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      import('aos').then(AOS => {
        AOS.default.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true
        })
      })
    }
  }
  ngOnDestroy() { }
  ngOnInit() {
   
  }
  
  

}
