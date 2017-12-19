import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  private courses$; // adding a "$" to the variable is a naming convention to indicate this is an Observable
  private author$;  // adding a "$" to the variable is a naming convention to indicate this is an Observable
  private courses: any[];
  private subscription: Subscription;

  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('/courses').valueChanges();
    this.author$ = db.object('/authors/1').valueChanges();
    this.subscription = db.list('/courses').valueChanges().subscribe(courses => {
      this.courses = courses;
      console.log(this.courses);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
