import { Injectable, OnDestroy } from '@angular/core';
import { firstValueFrom, Subject } from 'rxjs';
import { MergeUsersUserCase } from 'src/app/user/domain/use-cases/merge-user.use-case';
import { v4 as uuidv4 } from 'uuid';
import { LocalStorageAuthRepository } from '../../data/localstorage-auth.repository';
import { Auth } from '../model/auth';

@Injectable()
export class SessionService implements OnDestroy {

  destroyed$ = new Subject<void>();

  constructor(
    private localRepository: LocalStorageAuthRepository,
    private migrateUsers: MergeUsersUserCase,
  ) { }

  /** creates and stores a new session */
  createSession(): Auth {
    const auth = new Auth(uuidv4());
    this.storeCredentials(auth);
    return auth;
  }

  /** creates a new session with a new user, if user already have a session, merge both */
  async storeCredentials(auth: Auth) {
    const oldAuth = this.localRepository.loadAuth();
    if (oldAuth) {
      await firstValueFrom(this.migrateUsers.mergeUsers(oldAuth.id, auth.id));
    }
    this.localRepository.saveAuth(auth);
  }

  /** load current session data */
  loadAuth(): Auth | undefined {
    return this.localRepository.loadAuth();
  }

  /** returns current session */
  fetchAuthData(): Auth {
    return this.initAuth();
  }

  /** returns current session, if doesn't have one, creates a new session then return it */
  initAuth(): Auth {
    const auth = this.loadAuth();
    if (!auth) {
      return this.createSession();
    }
    return auth;
  }

  cleanLocalSession(): void {
    const auth = this.loadAuth();
    if (auth && !auth.anonymous) {
      this.localRepository.clearAuth();
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
