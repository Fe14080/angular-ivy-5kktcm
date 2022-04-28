import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(public httpClient: HttpClient) {}

  getUsers(page: number, results: number): Observable<any> {
    return this.httpClient.get(
      `https://randomuser.me/api/?page=${page}&results=${results}&seed=abc`
    );
  }
}
