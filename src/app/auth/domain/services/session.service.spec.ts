import { TestBed } from '@angular/core/testing';
import { MergeUsersUserCase } from 'src/app/user/domain/use-cases/merge-user.use-case';
import { LocalStorageAuthRepository } from '../../data/localstorage-auth.repository';
import { Auth } from '../model/auth';
import { SessionService } from './session.service';

class FakeLocalStorageAuthRepository {
  private readonly fakeSession: Auth = {
    id: '21596b82-4c52-4d1e-bcc7-5dc92607592d',
    anonymous: false
  };

  loadAuth(): Auth | undefined {
    return this.fakeSession;
  }

  saveAuth(auth: Auth): Auth {
    return auth;
  }

  clearAuth(): void { }
}

class FakeMergeUsersUserCase { }

describe('SessionService', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        SessionService,
        { provide: LocalStorageAuthRepository, useClass: FakeLocalStorageAuthRepository },
        { provide: MergeUsersUserCase, useClass: FakeMergeUsersUserCase },
      ]
    }).compileComponents();
  });

  it('should create a new nonNull session', () => {
    const service = TestBed.inject(SessionService);
    const session = service.createSession();
    const nonNullSession = !!session.anonymous && !!session.id;
    expect(nonNullSession).toBeTrue();
  });

  it('should maintain previous session when it already exists', () => {
    const fakeSession: Auth = {
      id: '21596b82-4c52-4d1e-bcc7-5dc92607592d',
      anonymous: false
    };

    const service = TestBed.inject(SessionService);
    const session = service.initAuth();

    const sameProperties = fakeSession.anonymous === session.anonymous && fakeSession.id === session.id;
    expect(sameProperties).toBeTrue();
  });
});
