import { TestBed } from '@angular/core/testing';
import { SessionService } from 'src/app/auth/domain/services/session.service';
import { PollRepository } from '../../data/poll.repository';
import { VoteRepository } from '../../data/vote.repository';
import { Vote } from '../models/vote';
import { LoadVotesUseCase } from './load-votes.use-case';

class FakeSessionService { }

class FakeVoteRepository {

}

class FakePollRepository { }

describe('LoadVotesUseCase', () => {
  let useCase: LoadVotesUseCase;

  const votes: Vote[] = [
    new Vote('123', '123', '333', 'op1', 'title'),
    new Vote('234', '123', '333', 'op3', 'title2'),
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadVotesUseCase,
        { provide: SessionService, useClass: FakeSessionService },
        { provide: VoteRepository, useClass: FakeVoteRepository },
        { provide: PollRepository, useClass: FakePollRepository },
      ]
    });
    useCase = TestBed.inject(LoadVotesUseCase);
  });

  it('should return true if vote list is not empty', () => {
    expect(useCase.containVotes(votes)).toBeTrue();
  });

  it('should return false if votes is not empty', () => {
    expect(useCase.containVotes([])).toBeFalse();
  });

  it('should return false if votes is undefined', () => {
    expect(useCase.containVotes()).toBeFalse();
  });
});
