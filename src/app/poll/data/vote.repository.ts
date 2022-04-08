import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vote } from '../domain/models/vote';

@Injectable()
export class VoteRepository {
  constructor(private http: HttpClient) { }

  private readonly url = 'api/vote';

  editVote(vote: Vote) {
    return this.http.put(this.url, vote);
  }

  loadVotes() {
    return this.http.get<Vote[]>(this.url);
  }

  loadVotesByVoter(userId: string) {
    return this.http.get<Vote[]>(`${this.url}?voter=${userId}`);
  }

  storeVote(vote: Vote) {
    return this.http.post('api/vote', vote);
  }

  loadById(id: string) {
    return this.http.get<Vote | undefined>(`api/vote/${id}`);
  }

  deleteVote(vote: Vote) {
    return this.http.delete(`${this.url}/${vote.id}`);
  }
}
