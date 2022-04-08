import { Injectable } from '@angular/core';
import { PollRepository } from '../../data/poll.repository';
import { Poll } from '../models/poll';

@Injectable()
export class EditPollUseCase {

  constructor(private repository: PollRepository) { }

  editPoll(poll: Poll) {
    this.validatePoll(poll);
    return this.repository.editPoll(poll);
  }

  validatePoll(poll: Poll): void {
    if (!poll.id) {
      throw new Error('Id is not valid, impossible to edit');
    }
  }
}
