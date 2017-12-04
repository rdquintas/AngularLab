import { Component, OnInit } from '@angular/core';
import { FollowersService } from './../services/followers.service';

@Component({
  selector: 'app-my-followers',
  templateUrl: './my-followers.component.html',
  styleUrls: ['./my-followers.component.css']
})
export class MyFollowersComponent implements OnInit {
  followers: any[];
  constructor(private service: FollowersService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => {
        this.followers = followers;
        console.log('My Followers:', this.followers);
      });
  }
}
