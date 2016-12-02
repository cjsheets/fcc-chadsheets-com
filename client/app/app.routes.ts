import { Routes, RouterModule } from '@angular/router';

import { PollComponent } from './components/poll/poll.component';
import { PollListComponent } from './components/poll-list/poll-list.component';
import { NewPollComponent } from './components/new-poll/new-poll.component';
import { LoginComponent } from './components/login/login.component';
// import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  { path: '', component: PollListComponent },
  { path: 'poll', component: PollComponent },
  { path: 'poll/new', component: NewPollComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

export const router = RouterModule.forRoot(routes);