import { AfterViewInit, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  standalone: false,
  
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit, AfterViewInit {

  isSidebarOpen = false;


  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  

  
  constructor() { }

  
  ngAfterViewInit() {}

 
  ngOnInit() { }

}
