import { Observable } from 'rxjs/Observable';
import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireObject } from 'angularfire2/database/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  private courses$: Observable<any[]>; // adding a "$" to the variable is a naming convention to indicate this is an Observable
  private author$: Observable<any[]>;  // adding a "$" to the variable is a naming convention to indicate this is an Observable

  private arr_courses: any[];
  private subscription: Subscription;

  constructor(private db: AngularFireDatabase) {
    // this.courses$ = this.db.list('/courses').valueChanges();


    this.courses$ = this.db.list('/courses').snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
    });

    this.author$ = this.db.object('/authors/1').valueChanges();

    this.subscription = this.db.list('/courses').valueChanges().subscribe(courses => {
      this.arr_courses = courses;
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
    this.db.list('/courses').push(course.value);
    course.value = '';
  }

  update(course) {
    const nowsTheTime: Date = new Date();
    const str = nowsTheTime.toDateString() + ' | ' + nowsTheTime.toLocaleTimeString();
    this.db.object('/courses/').update({ [course.key]: 'Updated: ' + str });
  }

  delete(key) {
    this.db.object('/courses/' + key).remove();
  }
}
