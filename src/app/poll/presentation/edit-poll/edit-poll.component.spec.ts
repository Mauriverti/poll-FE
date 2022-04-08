import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { Poll } from '../../domain/models/poll';
import { EditPollUseCase } from '../../domain/use-cases/edit-poll.use-case';
import { LoadPollUseCase } from '../../domain/use-cases/load-poll.use-case';
import { EditPollComponent } from './edit-poll.component';

class FakeEditPollUseCase { }

class FakeLoadPollUseCase { }

describe('EditPollComponent', () => {
  let component: EditPollComponent;
  let fixture: ComponentFixture<EditPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSlideToggleModule,
      ],
      providers: [
        { provide: LoadPollUseCase, useClass: FakeLoadPollUseCase },
        { provide: EditPollUseCase, useClass: FakeEditPollUseCase },
      ],
      declarations: [
        EditPollComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPollComponent);
    component = fixture.componentInstance;
  });

  it('should create EditPollComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should increase options by one calling addOption() and decrease by one calling removeOption()', () => {
    const length = component.options.controls.length;
    component.addOption();
    const lengthPlus1 = component.options.controls.length;
    expect(lengthPlus1).toEqual(length + 1);

    component.removeOption(0);
    const lengthPlus1Minus1 = component.options.controls.length;
    expect(length).toEqual(lengthPlus1Minus1);
  });

  it('should add options by loaded poll', () => {
    const optionsLength = 4;
    component.initiateOptions(optionsLength);
    expect(component.options.length).toEqual(optionsLength);
  });
});
