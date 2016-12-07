import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoteComponent } from './vote.component';
import { PollComponent } from './poll/poll.component';
import { PollListComponent } from './poll-list/poll-list.component';
import { NewPollComponent } from './new-poll/new-poll.component';

// Save space in the root module, export components here
export const routedComponents = [
  VoteComponent,
  PollComponent,
  PollListComponent,
  NewPollComponent
];

const routes: Routes = [
  { path: '', component: VoteComponent },
  { path: 'vote', component: PollListComponent },
  { path: 'poll', component: PollComponent },
  { path: 'poll/new', component: NewPollComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class VoteRoutingModule { }