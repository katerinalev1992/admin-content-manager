import {Injectable} from '@angular/core';
import User from '../entities/User';
import {CanActivate, Router} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService implements CanActivate {

  userSessionInfo: User;

  constructor(private router: Router) {
  }

  setUser(user: User) {
    this.userSessionInfo = user;
  }

  canActivate(): Observable<boolean> {
    if (this.userSessionInfo) {
      return of(true);
    } else {
      this.router.navigate(['']);
      return of(false);
    }
  }
}
