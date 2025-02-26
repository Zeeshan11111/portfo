import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: false,
  
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  myData = [
    {
      icon: 'bx bx-code-block',
      title: 'Web Development',
      description: 'We build modern and scalable websites tailored to your needs.',
      link: '/web-development'
    },
    {
      icon: 'bx bxl-angular',
      title: 'Angular',
      description: 'Expert Angular development services for dynamic applications.',
      link: '/angular'
    },
    {
      icon: 'bx bxs-edit-alt',
      title: 'Web Design',
      description: 'Crafting visually appealing and user-friendly website designs.',
      link: '/web-design'
    }
  ];
  ngOnInit() { }

}
