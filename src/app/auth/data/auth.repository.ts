import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/login/domain/models/user';

@Injectable()
export class AuthRepository {

  constructor(private http: HttpClient) { }

  signUp(user: User): Observable<any> {
    return this.http.post<any>('api/auth/signUp', user);
  }

  signIn(user: User): Observable<any> {
    return this.http.post<any>('api/auth/signIn', user);
  }

  signOut(): Observable<any> {
    return this.http.post('api/auth/logout', {});
  }
}
