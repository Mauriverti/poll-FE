import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserRepository {
  constructor(private http: HttpClient) { }

  private readonly url = 'api/user';

  mergeUsers(oldUserId: string, newUserId: string) {
    const payload = {
      oldUserId,
      newUserId,
    }
    return this.http.post(`${this.url}/merge`, payload);
  }
}
