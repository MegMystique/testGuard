import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {IUser} from './iuser';
import 'rxjs/add/operator/filter';

@Injectable()
export class StreamDataService {

  public userStream: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);

  constructor(private httpService: HttpClient) {
    this.getUser();
    this.userStream = new BehaviorSubject<IUser>(null);
  }

  getUser() {
    this.httpService.get('assets/user.json').subscribe((res) => {
      this.userStream.next(res['user']);
    });
  }

  get currentUser() {
    return this.userStream.asObservable().filter(x => x !== null);
  }
}
