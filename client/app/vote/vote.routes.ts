import { Routes, RouterModule } from '@angular/router';

import { PollComponent } from './poll/poll.component';
import { PollListComponent } from './poll-list/poll-list.component';
import { NewPollComponent } from './new-poll/new-poll.component';

// Save space in the root module, export components here
export const appRoutedComponents = [
  PollComponent,
  PollListComponent,
  NewPollComponent
];

const routes: Routes = [
  { path: 'vote', component: PollListComponent },
  { path: 'poll', component: PollComponent },
  { path: 'poll/new', component: NewPollComponent }
];

export const appRoutes = RouterModule.forChild(routes);