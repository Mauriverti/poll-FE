import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PollRepository } from '../../data/poll.repository';
import { Poll } from '../models/poll';

@Injectable()
export class ListPollsUseCase {

  constructor(private repository: PollRepository) { }

  listUserPolls(): Observable<Poll[]> {
    return this.repository.loadPolls();
  }
}
