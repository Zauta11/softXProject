import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    private readonly router: Router
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    const token = localStorage.getItem('token')

    return of(!!token).pipe(
      map((hasToken: boolean) => {

        if (!hasToken) {
          alert('Please Login!'),
          

          this.router.navigate([ 'signin' ]);
        }

        return hasToken;
      })
    );
  }

}

