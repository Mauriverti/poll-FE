import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterTestingModule } from '@angular/router/testing';
import { AddPollUseCase } from '../../domain/use-cases/add-poll.use-case';
import { NewPollComponent } from './new-poll.component';

class FakeAddPollUseCase { }

describe('PollComponent', () => {
  let component: NewPollComponent;
  let fixture: ComponentFixture<NewPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSlideToggleModule,
      ],
      providers: [
        { provide: AddPollUseCase, useClass: FakeAddPollUseCase },
      ],
      declarations: [
        NewPollComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPollComponent);
    component = fixture.componentInstance;
  });

  it('should create NewPollComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should increase options by one calling addOption() and decrease by one calling removeOption()', () => {
    const length = component.options.controls.length;
    component.addOption();
    const lengthPlus1 = component.options.controls.length;
    expect(length + 1).toEqual(lengthPlus1);

    component.removeOption(0);
    const lengthPlus1Minus1 = component.options.controls.length;
    expect(length).toEqual(lengthPlus1Minus1);
  });
});
