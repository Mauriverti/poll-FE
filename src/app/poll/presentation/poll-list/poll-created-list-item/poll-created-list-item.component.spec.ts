import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { Vote } from 'src/app/poll/domain/models/vote';
import { LoadVotesUseCase } from 'src/app/poll/domain/use-cases/load-votes.use-case';
import { PollCreatedListItemComponent } from './poll-created-list-item.component';

class FakeLoadVotesUseCase {
  private readonly fakeVote = new Vote(
    '21596b82-4c52-4d1e-bcc7-5dc92607592d',
    '21596b82-4c52-4d1e-bcc7-5dc92607592d',
    '21596b82-4c52-4d1e-bcc7-5dc92607592d',
    'option1',
    'fakePoll'
  );

  loadVotesByPoll(pollId: string): Observable<Vote[]> {
    return of([this.fakeVote]);
  }

  pollWithVotes(pollId: string): Observable<boolean> {
    return of(true);
  }
}

describe('PollCreatedListItemComponent', () => {

  let component: PollCreatedListItemComponent;
  let fixture: ComponentFixture<PollCreatedListItemComponent>;
  let db: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTooltipModule,
      ],
      providers: [
        { provide: LoadVotesUseCase, useClass: FakeLoadVotesUseCase },
      ],
      declarations: [
        PollCreatedListItemComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollCreatedListItemComponent);
    component = fixture.componentInstance;
    db = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create PollCreatedListItemComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should enable edit button when poll has not been voted', () => {
    component.canEdit = true;
    expect(db.query(By.css('button')).nativeElement.disabled).toBeFalse();
  });
});
