import { Observable } from 'rxjs/Observable';
import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  private courses$: Observable<any[]>; // adding a "$" to the variable is a naming convention to indicate this is an Observable
  private author$: Observable<any[]>;  // adding a "$" to the variable is a naming convention to indicate this is an Observable
  private coursesList: AngularFireList<any>;
  private courses: any[];
  private subscription: Subscription;

  constructor(private db: AngularFireDatabase) {
    this.courses$ = db.list('/courses').valueChanges();

    this.author$ = db.object('/authors/1').valueChanges();
    this.subscription = db.list('/courses').valueChanges().subscribe(courses => {
      this.courses = courses;
      console.log(this.courses);
    });
  }

  ngOnDestroy(): void {
    // If we are not using ASYNC PIPE then we should unsubscribe from the Observable to avoid
    // memory leaks.
    // This method here will be calling when leaving the component, thus assuring that the we
    // always unsubsribe from the Observable when not needed.
    // For the demo I have added a <button> to the view to simulate this behaviour
    this.subscription.unsubscribe();
  }

  add(course: HTMLInputElement) {
    console.log('course: ', course.value);
    this.coursesList.push(course.value);
    // this.db.list('/courses').push(course);
  }

  update(course) {
    console.log('update course: ', course);
    // this.db.object('/courses/' + course.key).update({ $value: course.$value });
    // this.db.object('/courses/' + course.$key).set(course.$value + 'UPDATED');
    // this.db.list('/courses').push(course);
  }
}
