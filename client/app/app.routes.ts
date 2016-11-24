import { Routes } from '@angular/router';
import { VoteDashboardComponent } from './components/vote-dashboard/vote-dashboard.component';
// import { AuthComponent } from './components/auth/auth.component';

export const routes = [
  { path: '', component: VoteDashboardComponent, pathMatch: 'full' },
  // { path: 'login', component: AuthComponent },
  { path: '**',     component: VoteDashboardComponent }
];