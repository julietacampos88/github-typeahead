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
    this.http.get(`${BASE_URL}/users/${user}/repos`).pipe(
      map(response => response),
      catchError(err => err)
    ).subscribe(data => console.log(data))
  }
}
