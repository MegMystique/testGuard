import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {StreamDataService} from './stream-data.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(private streamDataService: StreamDataService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.streamDataService.currentUser
      .map(user => {
        if (user.role === 'Manager') {
          return user.role === 'Manager';
        } else {
          this.router.navigate(['/home']);
          return user.role !== 'Manager';
        }
      });
  }

}
