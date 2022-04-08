import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../../domain/models/user';
import { NewAccountUseCase } from '../../domain/use-cases/new-account.use-case';

@Component({
  selector: 'poll-new-accont',
  styleUrls: ['./new-account.component.sass'],
  templateUrl: './new-account.component.html'
})
export class NewAccountComponent implements OnDestroy {

  newAccountForm: FormGroup;

  private readonly emailRegex = /\S+@\S+\.\S+/;
  destroyed$ = new Subject<void>();

  constructor(
    private router: Router,
    private newAccount: NewAccountUseCase,
  ) {
    this.newAccountForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(this.emailRegex)
      ]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.required
      ])
    });
  }

  create(newAccount: FormGroup): void {
    this.newAccount.createAccount(newAccount.value as User).pipe(
      takeUntil(this.destroyed$)
    ).subscribe({
      next: () => this.goBack(),
      error: (response: HttpErrorResponse) => {
        this.showErrorMessage(response.error.message);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['..']);
  }

  showErrorMessage(message: string): void {
    alert(message);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
