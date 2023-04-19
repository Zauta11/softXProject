import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces';

@Injectable({ providedIn: 'root' })
export class UsersService {
  readonly URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.URL}/${id}`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.URL}/${id}`);
  }
}
