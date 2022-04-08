import { Injectable } from '@angular/core';
import { VoteRepository } from '../../data/vote.repository';
import { Vote } from '../models/vote';

@Injectable()
export class EditVoteUseCase {

  constructor(
    private repository: VoteRepository,
  ) { }

  editVote(vote: Vote) {
    return this.repository.editVote(vote);
  }
}
