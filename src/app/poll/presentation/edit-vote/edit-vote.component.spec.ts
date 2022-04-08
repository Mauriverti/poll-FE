import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RouterTestingModule } from '@angular/router/testing';
import { EditVoteUseCase } from '../../domain/use-cases/edit-vote.use-case';
import { LoadPollUseCase } from '../../domain/use-cases/load-poll.use-case';
import { LoadVotesUseCase } from '../../domain/use-cases/load-votes.use-case';
import { EditVoteComponent } from './edit-vote.component';

class FakeLoadPollUseCase { }

class FakeEditVoteUseCase { }

class FakeLoadVotesUseCase { }

describe('EditVoteComponent', () => {
  let component: EditVoteComponent;
  let fixture: ComponentFixture<EditVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatRadioModule,
      ],
      providers: [
        { provide: LoadVotesUseCase, useClass: FakeLoadVotesUseCase },
        { provide: EditVoteUseCase, useClass: FakeEditVoteUseCase },
        { provide: LoadPollUseCase, useClass: FakeLoadPollUseCase },
      ],
      declarations: [
        EditVoteComponent
      ],
    }).compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the EditVoteComponent', () => {
    expect(component).toBeTruthy();
  });
});
