import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poll } from '../domain/models/poll';
import { Vote } from '../domain/models/vote';

@Injectable()
export class PollRepository {

  private readonly url = 'api/poll';

  constructor(
    private http: HttpClient
  ) { }

  loadPolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>(this.url);
  }

  createPoll(poll: Poll) {
    return this.http.post(this.url, poll);
  }

  editPoll(poll: Poll) {
    return this.http.put(this.url, poll);
  }

  deletePoll(poll: Poll) {
    return this.http.delete(`${this.url}/${poll.id}`,);
  }

  loadPollVotes(pollId: string) {
    return this.http.get<Vote[]>(`${this.url}/${pollId}/votes`)
  }

  loadById(id: string): Observable<Poll | undefined> {
    return this.http.get<Poll | undefined>(`api/poll/${id}`);
  }
}
