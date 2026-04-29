import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { StudentCard } from './student-card/student-card';
import { LivePreview } from './live-preview/live-preview';
import { DivDirectives } from './div-directives/div-directives';
import { ApiUsers } from './api-users/api-users';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'student', component: StudentCard },
  { path: 'preview', component: LivePreview },
  { path: 'directives', component: DivDirectives },
  { path: 'api', component: ApiUsers },
  { path: 'about', component: About },
  { path: 'contact', component: Contact }
];