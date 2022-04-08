import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionService } from 'src/app/auth/domain/services/session.service';
import { LoadPollUseCase } from '../../domain/use-cases/load-poll.use-case';
import { VoteUseCase } from '../../domain/use-cases/vote.use-case';
import { VotePollComponent } from './vote-poll.component';

class FakeSessionService { }

class FakeLoadPollUseCase { }

class FakeVoteUseCase { }

describe('VotePollComponent', () => {
  let component: VotePollComponent;
  let fixture: ComponentFixture<VotePollComponent>;
  let db: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
      ],
      providers: [
        { provide: SessionService, useClass: FakeSessionService },
        { provide: LoadPollUseCase, useClass: FakeLoadPollUseCase },
        { provide: VoteUseCase, useClass: FakeVoteUseCase },
      ],
      declarations: [
        VotePollComponent
      ],
    }).compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotePollComponent);
    component = fixture.componentInstance;
    db = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the VotePollComponent', () => {
    expect(component).toBeTruthy();
  });

  it('anonymous user can see public poll', () => {
    component.userCanSeePoll(true, true);
    expect(component.userCanVote).toBeTrue();
  });

  it('anonymous user can not see private poll', () => {
    component.userCanSeePoll(false, true);
    expect(component.userCanVote).toBeFalse();
  });

  it('logged in user can see public poll', () => {
    component.userCanSeePoll(true, false);
    expect(component.userCanVote).toBeTrue();
  });

  it('logged in user can see private poll', () => {
    component.userCanSeePoll(false, false);
    expect(component.userCanVote).toBeTrue();
  });

  it('should show loading message while it is loading if user can vote the poll', () => {
    component.userCanVote = undefined;
    expect(db.query(By.css('span')).nativeElement.innerText).toBe('Loading..');
  });
});
