import { Injectable } from '@angular/core';
import { PollRepository } from '../../data/poll.repository';
import { Poll } from '../models/poll';

@Injectable()
export class DeletePollUseCase {

  constructor(
    private repository: PollRepository,
  ) { }

  delete(poll: Poll) {
    return this.repository.deletePoll(poll);
  }
}
