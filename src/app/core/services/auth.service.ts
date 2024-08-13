import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../interfaces/user";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'https://dummyjson.com/auth/';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.authUrl}login`, {username, password});
  }

  refreshToken(refreshToken: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.authUrl}refresh`, {refreshToken});
  }
}
