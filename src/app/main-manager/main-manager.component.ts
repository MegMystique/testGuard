import {Component, OnInit} from '@angular/core';
import {StreamDataService} from '../stream-data.service';
import {IUser} from '../iuser';

@Component({
  selector: 'app-main-manager',
  templateUrl: './main-manager.component.html',
  styleUrls: ['./main-manager.component.css']
})
export class MainManagerComponent implements OnInit {
  user: IUser;

  constructor(private streamData: StreamDataService) {
  }

  ngOnInit() {
    this.streamData.currentUser.subscribe(user => this.user = user);
  }

}
