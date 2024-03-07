import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ResourcesComponent } from './resources/resources.component';

export const APP_ROUTE: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'contact',
    component: ContactsComponent,
  },
  {
    path: 'resources',
    component: ResourcesComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
