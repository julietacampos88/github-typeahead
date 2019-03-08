import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

const BASE_URL = 'https://api.github.com';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUserRepos(user: string) {
    return this.http.get(`${BASE_URL}/users/${user}/repos`).pipe(
      map(response => response),
      catchError(err => err)
    );
  }

  getRepoContributors(username: string, repoName: string) {
    return this.http.get(`${BASE_URL}/${username}/${repoName}/contributors`).pipe(
      map(response => response),
      catchError(err => err)
    );
  }
}
