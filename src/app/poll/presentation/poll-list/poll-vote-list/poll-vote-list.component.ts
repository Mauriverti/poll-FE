import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Vote } from 'src/app/poll/domain/models/vote';
import { DeleteVoteUseCase } from 'src/app/poll/domain/use-cases/delete-vote.use-case';
import { LoadVotesUseCase } from 'src/app/poll/domain/use-cases/load-votes.use-case';
import { PollRoutes } from '../../routing/poll-routes';

@Component({
  selector: 'poll-vote-list',
  templateUrl: './poll-vote-list.component.html'
})
export class PollVoteListComponent implements OnDestroy {

  votes$: Observable<Vote[]>;
  destroyed$ = new Subject<void>();

  constructor(
    private loadVotes: LoadVotesUseCase,
    private deleteVotes: DeleteVoteUseCase,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.votes$ = this.loadVotes.loadUserVotes();
  }

  delete(vote: Vote): void {
    this.deleteVotes.deleteVote(vote)
    .pipe(takeUntil(this.destroyed$))
    .subscribe(() => {
      this.votes$ = this.loadVotes.loadUserVotes();
    });
  }

  edit(vote: Vote): void {
    this.router.navigate([`../${vote.pollId}/${PollRoutes.VOTE}/${vote.id}`], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
