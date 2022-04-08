import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PollRepository } from '../../data/poll.repository';
import { Poll } from '../models/poll';

@Injectable()
export class LoadPollUseCase {
  constructor(private repository: PollRepository) { }

  loadById(id: string): Observable<Poll | undefined> {
    return this.repository.loadById(id);
  }
}
