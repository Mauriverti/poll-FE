import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionService } from 'src/app/auth/domain/services/session.service';
import { PollRepository } from '../../data/poll.repository';
import { VoteRepository } from '../../data/vote.repository';
import { Vote } from '../models/vote';

@Injectable()
export class LoadVotesUseCase {

  constructor(
    private pollRepository: PollRepository,
    private repository: VoteRepository,
    private session: SessionService,
  ) { }

  containVotes(votes?: Vote[]): boolean {
    return !!votes && votes.length > 0;
  }

  loadUserVotes() {
    const auth = this.session.loadAuth();
    return this.repository.loadVotesByVoter(auth?.id || '');
  }

  loadVotes(): Observable<Vote[]> {
    return this.repository.loadVotes();
  }

  loadVotesByPoll(pollId: string): Observable<Vote[]> {
    return this.pollRepository.loadPollVotes(pollId);
  }

  pollWithVotes(pollId: string): Observable<boolean> {
    return this.loadVotesByPoll(pollId).pipe(
      map(this.containVotes)
    );
  }

  loadVotesById(voteId: string): Observable<Vote | undefined> {
    return this.repository.loadById(voteId);
  }
}
