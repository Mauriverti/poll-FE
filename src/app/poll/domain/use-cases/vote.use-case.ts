import { Injectable } from '@angular/core';
import { VoteRepository } from '../../data/vote.repository';
import { Vote } from '../models/vote';

@Injectable()
export class VoteUseCase {

  constructor(private repository: VoteRepository) { }

  vote(vote: Vote) {
    return this.repository.storeVote(vote);
  }
}
