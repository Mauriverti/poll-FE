import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EditPollComponent } from './edit-poll/edit-poll.component';
import { EditVoteComponent } from './edit-vote/edit-vote.component';
import { NewPollComponent } from './new-poll/new-poll.component';
import { PollCreatedListItemComponent } from './poll-list/poll-created-list-item/poll-created-list-item.component';
import { PollCreatedListComponent } from './poll-list/poll-created-list/poll-created-list.component';
import { PollListComponent } from './poll-list/poll-list.component';
import { VotePollListItemComponent } from './poll-list/poll-vote-list-item/vote-poll-list-item.component';
import { PollVoteListComponent } from './poll-list/poll-vote-list/poll-vote-list.component';
import { PollResultComponent } from './poll-results/poll-result.component';
import { PollComponent } from './poll/poll.component';
import { PollRouting } from './routing/poll.routing';
import { VotePollComponent } from './vote-poll/vote-poll.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    PollRouting,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatRadioModule,
    MatDividerModule,
  ],
  declarations: [
    PollComponent,
    PollListComponent,
    PollVoteListComponent,
    PollCreatedListComponent,
    PollCreatedListItemComponent,
    NewPollComponent,
    EditPollComponent,
    VotePollComponent,
    VotePollListItemComponent,
    EditVoteComponent,
    PollResultComponent,
  ]
})
export class PollPresentationModule { }
