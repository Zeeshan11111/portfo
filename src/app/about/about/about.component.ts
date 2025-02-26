import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy {


  ngOnDestroy() {
    console.log("Component Destroyed - ngOnDestroy");
  }


  ngOnInit() {
    console.log("this is working about")
  }

}
