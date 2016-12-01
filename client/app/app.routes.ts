import { Routes, RouterModule } from '@angular/router';

import { VoteDashboardComponent } from './components/vote-dashboard/vote-dashboard.component';
// import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  { path: '', component: VoteDashboardComponent },
  { path: '**', redirectTo: '' }
];

export const router = RouterModule.forRoot(routes, {
  useHash: true
});