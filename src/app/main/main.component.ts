import {Component, OnInit} from '@angular/core';
import {IUser} from '../iuser';
import {StreamDataService} from '../stream-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: IUser;

  constructor(private streamData: StreamDataService) {
  }

  ngOnInit() {
    this.streamData.currentUser.subscribe(user => this.user = user);
  }

}
