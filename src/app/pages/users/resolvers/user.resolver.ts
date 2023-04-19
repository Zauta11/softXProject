import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, catchError, of, throwError } from 'rxjs';
import { User } from 'src/app/core/interfaces';
import { UsersService } from '../infrastructure/users.service';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User | null> {

  constructor(private readonly usersService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User | null> {
    const id = route.paramMap.get('id');

    return !id ? of(null) : this.usersService
      .getUser(+id)
      .pipe(catchError(() => throwError(() => new Error('User not Found!'))));
  }
} 
