import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRepository } from 'src/app/auth/data/auth.repository';
import { User } from '../models/user';

@Injectable()
export class NewAccountUseCase {

  constructor(private signInRepository: AuthRepository) { }

  createAccount(user: User): Observable<any> {
    return this.signInRepository.signUp(user);
  }
}
