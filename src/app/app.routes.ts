import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerComponent } from './viewer/viewer.component';

export const routes: Routes = [
  { path: '', redirectTo: '/blog-component', pathMatch: 'full' }, 
  { path: 'blog-component', component: BlogComponent},
  { path: 'about-component', component: AboutComponent},
  { path: 'projects-component', component: ProjectsComponent },
  { path: 'viewer-component', component: ViewerComponent },
];
