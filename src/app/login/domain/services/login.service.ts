import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRepository } from 'src/app/auth/data/auth.repository';
import { SessionService } from 'src/app/auth/domain/services/session.service';
import { User } from '../models/user';

@Injectable()
export class LoginService {

  constructor(
    private signInRepository: AuthRepository,
    private sessionService: SessionService,
  ) { }

  login(user: User): Observable<any> {
    return this.signInRepository.signIn(user);
  }

  logout(): Observable<any> {
    this.sessionService.cleanLocalSession();
    return this.signInRepository.signOut();
  }
}
