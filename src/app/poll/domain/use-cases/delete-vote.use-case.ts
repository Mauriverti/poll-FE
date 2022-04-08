import { Injectable } from '@angular/core';
import { VoteRepository } from '../../data/vote.repository';
import { Vote } from '../models/vote';

@Injectable()
export class DeleteVoteUseCase {

  constructor(private repository: VoteRepository) { }

  deleteVote(vote: Vote) {
    return this.repository.deleteVote(vote);
  }
}
