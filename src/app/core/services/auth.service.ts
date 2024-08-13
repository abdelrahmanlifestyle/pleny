import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.authUrl, {username, password});
  }
}
