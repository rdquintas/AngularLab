import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 0
  };

  // This one is for the external component
  tweet2 = {
    body: 'Here is the body of a tweet...',
    isLiked: true,
    likesCount: 10
  };

  onClick() {
    if (this.tweet.likesCount === 0) {
      this.tweet.likesCount = 1;
      this.tweet.isLiked = true;
    } else {
      this.tweet.likesCount = 0;
      this.tweet.isLiked = false;
    }
  }

}
