import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule), data: { Animation: 'Homepage' }
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule), data: { Animation: 'Aboutpage' }
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule), data: { Animation: 'Contactpage' }
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule), data: { Animation: 'Blogpage' }
  },
  {
    path: 'experience',
    loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule), data: { Animation: 'Experiencepage' }
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule), data: { Animation: 'projectspage' }
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' } 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
