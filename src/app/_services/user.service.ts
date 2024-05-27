import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment-dev';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(username: string) {
    return this.http.get<any>(`${environment.apiUrl}/users/${username}`);
  }

  getUserRepos(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/users/${username}/repos`);
  }

}
