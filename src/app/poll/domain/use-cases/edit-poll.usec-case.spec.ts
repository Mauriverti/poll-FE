import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { PollRepository } from '../../data/poll.repository';
import { Poll } from '../models/poll';
import { EditPollUseCase } from './edit-poll.use-case';

class FakePollRepository {

  private readonly fakePoll = new Poll(
    '21596b82-4c52-4d1e-bcc7-5dc92607592d',
    'fakePoll',
    'fakePoll',
    true,
    '21596b82-4c52-4d1e-bcc7-5dc92607592d',
    ['option1', 'option2']
  );

  loadPolls(): Observable<Poll[]> {
    return of([this.fakePoll]);
  }

  loadPollsByCreator(id: string): Observable<Poll[]> {
    return of([this.fakePoll]);
  }

  async storePoll(poll: Poll): Promise<void> {
    return new Promise(() => { });
  }

  async editPoll(poll: Poll): Promise<void> {
    return new Promise(() => { });
  }

  loadById(id: string): Observable<Poll | undefined> {
    return of(this.fakePoll);
  }

  deletePoll(poll: Poll): void { }
}

describe('EditPollUseCase', () => {
  let useCase: EditPollUseCase;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EditPollUseCase,
        { provide: PollRepository, useClass: FakePollRepository },
      ]
    });
    useCase = TestBed.inject(EditPollUseCase);
  });

  it('should pass with poll with id', () => {
    const fakePoll = new Poll(
      '21596b82-4c52-4d1e-bcc7-5dc92607592d',
      'fakePoll',
      'fakePoll',
      true,
      '21596b82-4c52-4d1e-bcc7-5dc92607592d',
      ['option1', 'option2']
    );
    expect(useCase.validatePoll(fakePoll)).toBeUndefined();
  });

  it('should throw error if poll does\'t has an id', () => {
    const pollWithoutId = new Poll(
      '',
      'fakePoll',
      'fakePoll',
      true,
      '21596b82-4c52-4d1e-bcc7-5dc92607592d',
      ['option1', 'option2']
    );
    expect(() => useCase.validatePoll(pollWithoutId)).toThrow(new Error('Id is not valid, impossible to edit'));
  });
});
