import { Injectable } from '@angular/core';
import { UserRepository } from '../../data/user.repository';

@Injectable({ providedIn: 'root' })
export class MergeUsersUserCase {

  constructor(
    private repository: UserRepository,
  ) { }

  /** It Migrates all created polls and votes from a user to another */
  mergeUsers(previousUserId: string, newUserId: string) {
    return this.repository.mergeUsers(previousUserId, newUserId);
  }
}
