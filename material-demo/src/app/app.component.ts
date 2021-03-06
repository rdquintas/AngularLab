import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isChecked = false;
  isRadioButtonChecked = true;
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  selectedFood = 'pizza-1';
  minDate = new Date(2018, 1, 1);
  maxDate = new Date(2018, 1, 10);
  categories = [{ name: 'Beginner' }, { name: 'Intermediate' }, { name: 'Advanced' }];
  progress = 0;
  timer;

  constructor(private dialog: MatDialog) {
    this.timer = setInterval(() => {
      this.progress++;
      // console.log('zrq');
      if (this.progress === 100) {
        clearInterval(this.timer);
      }
    }, 20);
  }

  onChange(event) {
    console.log(event);
  }

  onSelectChip(cat) {
    this.categories.filter(c => c !== cat).forEach(c => c['selected'] = false);
    cat.selected = !cat.selected;
  }

  openDialog(event) {
    this.dialog.open(EditCourseComponent, { data: { courseId: 1 } }).afterClosed().subscribe(result => console.log(result));
  }


}
