import { Injectable } from '@angular/core';
import { PollRepository } from '../../data/poll.repository';
import { Poll } from '../models/poll';

@Injectable()
export class AddPollUseCase {

  constructor(private repository: PollRepository) { }

  addPoll(poll: Poll) {
    return this.repository.createPoll(poll);
  }
}
