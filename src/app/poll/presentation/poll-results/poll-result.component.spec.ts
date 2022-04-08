import { TestBed } from '@angular/core/testing';
import { MatDividerModule } from '@angular/material/divider';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { Vote } from '../../domain/models/vote';
import { LoadPollUseCase } from '../../domain/use-cases/load-poll.use-case';
import { LoadVotesUseCase } from '../../domain/use-cases/load-votes.use-case';
import { PollResultComponent } from './poll-result.component';

class FakeLoadPollUseCase { }

class FakeLoadVotesUseCase {
  private readonly fakeVote = new Vote(
    '21596b82-4c52-4d1e-bcc7-5dc92607592d',
    '21596b82-4c52-4d1e-bcc7-5dc92607592d',
    '21596b82-4c52-4d1e-bcc7-5dc92607592d',
    'option1',
    'fakePoll'
  );

  loadVotesById(voteId: string): Observable<Vote | undefined> {
    return of(this.fakeVote);
  }
}

describe('PollResultComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDividerModule,
      ],
      providers: [
        { provide: LoadPollUseCase, useClass: FakeLoadPollUseCase },
        { provide: LoadVotesUseCase, useClass: FakeLoadVotesUseCase },
      ],
      declarations: [
        PollResultComponent
      ],
    }).compileComponents();
  });

  it('should create PollResultComponent', () => {
    const fixture = TestBed.createComponent(PollResultComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
