import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
      image: "assets/images/zee.jpg",
      name: 'myapp',
      description: 'this is wonderfull project in angular.angular is is most power full framework.',
      link:'https://ecommerce.com'
    },{
      image: "assets/images/zee.jpg",
      name: 'myapp',
      description: 'this is wonderfull project in angular.angular is is most power full framework.',
      link:'https://ecommerce.com'
    },{
      image: "assets/images/zee.jpg",
      name: 'myapp',
      description: 'this is wonderfull project in angular.angular is is most power full framework.',
      link:'https://ecommerce.com'
    },{
      image: "assets/images/zee.jpg",
      name: 'myapp',
      description: 'this is wonderfull project in angular.angular is is most power full framework.',
      link:'https://ecommerce.com'
    },{
      image: "assets/images/zee.jpg",
      name: 'myapp',
      description: 'this is wonderfull project in angular.angular is is most power full framework.',
      link:'https://ecommerce.com'
    },{
      image: "assets/images/zee.jpg",
      name: 'myapp',
      description: 'this is wonderfull project in angular.angular is is most power full framework.',
      link:'https://ecommerce.com'
    },
  ]

}
